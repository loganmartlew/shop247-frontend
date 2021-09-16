import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import * as fb from '../firebase';
import { useNotification } from './NotificationContext';
import { fetchApi } from '../util/fetchApi';

const AuthContext = createContext({});

// Custom hook to consume context
export const useAuth = () => useContext(AuthContext);

// Context Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addError, addWarn } = useNotification();

  // Keep user state up to date with firebase's observer
  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
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
      const res = await fetchApi(`/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: userObj }),
      });

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

  const resetPassword = async email => {
    handleAuthError('Error sending password reset email', async () => {
      await fb.resetPassword(email);
      addWarn('Password reset link sent to your email');
    });
  };

  // Public properties/functions when context is used
  const value = {
    user,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
