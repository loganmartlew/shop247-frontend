import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import * as fb from '../firebase';

const AuthContext = createContext({});

// Custom hook to consume context
export const useAuth = () => useContext(AuthContext);

// Context Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Keep user state up to date with firebase's observer
  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      if (user) {
        return setUser(user);
      }
      return setUser(null);
    });
  }, []);

  const signIn = async (email, password) => {};

  const signUp = async (email, password) => {};

  const signOut = async () => {
    await fb.signOut();
  };

  // Public properties/functions when context is used
  const value = {
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
