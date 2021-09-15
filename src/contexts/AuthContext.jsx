import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import * as fb from '../firebase';
import { useNotification } from './NotificationContext';

const AuthContext = createContext({});

// Custom hook to consume context
export const useAuth = () => useContext(AuthContext);

// Context Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { addError } = useNotification();

  // Keep user state up to date with firebase's observer
  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      if (user) {
        return setUser(user);
      }
      return setUser(null);
    });
  }, []);

  const handleAuthError = async (errMessge, fn) => {
    try {
      await fn();
    } catch (_) {
      addError(errMessge);
    }
  };

  const signIn = async (email, password) => {
    handleAuthError('Error signing in', async () => {
      const user = await fb.signIn(email, password);
      setUser(user ?? null);
    });
  };

  const signUp = async (name, email, password) => {
    handleAuthError('Error signing up', async () => {
      // Add user in firebase
      const user = await fb.signUp(name, email, password);
      setUser(user ?? null);

      // Add user in backend
      const userObj = { uid: user.uid, name, email };
      const res = await fetch(``);

      if (!res.ok) throw new Error();
    });
  };

  const signOut = async () => {
    handleAuthError('Error signing out', async () => {
      await fb.signOut();
      setUser(null);
    });
    setUser(null);
  };

  // Public properties/functions when context is used
  const value = {
    user,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
