import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';

const ErrorContext = createContext({});

// Custom hook to consume context
export const useError = () => useContext(ErrorContext);

// Context Provider component
const ErrorProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState('');

  // Sets the error message (add validation here)
  const showError = msg => {
    setErrorMsg(msg);
  };

  // Removes error message after 3 seconds
  useEffect(() => {
    if (errorMsg === '') return;

    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [errorMsg]);

  // Public properties/functions when context is used
  const value = {
    errorMsg,
    showError,
  };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

export default ErrorProvider;
