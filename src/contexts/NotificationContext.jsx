import { createContext } from 'react';
import { useContext, useReducer } from 'react';
import { v4 } from 'uuid';

const NotificationContext = createContext({});

// Custom hook to consume context
export const useNotification = () => useContext(NotificationContext);

export const NotificationType = {
  ERROR: 1,
  WARN: 2,
  SUCCESS: 3,
};

const actions = {
  ADD_NOTIFICATION: 1,
  REMOVE_NOTIFICATION: 2,
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_NOTIFICATION: {
      return [...state, { ...action.payload }];
    }
    case actions.REMOVE_NOTIFICATION: {
      return state.filter(
        notification => notification.id !== action.payload.id
      );
    }
    default: {
      return state;
    }
  }
};

// Context Provider component
const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, []);

  const addError = msg => {
    dispatch({
      type: actions.ADD_NOTIFICATION,
      payload: {
        id: v4(),
        type: NotificationType.ERROR,
        message: msg,
      },
    });
  };

  const addWarn = msg => {
    dispatch({
      type: actions.ADD_NOTIFICATION,
      payload: {
        id: v4(),
        type: NotificationType.WARN,
        message: msg,
      },
    });
  };

  const addSuccess = msg => {
    dispatch({
      type: actions.ADD_NOTIFICATION,
      payload: {
        id: v4(),
        type: NotificationType.SUCCESS,
        message: msg,
      },
    });
  };

  const removeNotification = id => {
    dispatch({
      type: actions.REMOVE_NOTIFICATION,
      payload: {
        id,
      },
    });
  };

  const value = {
    notifications: state,
    addError,
    addWarn,
    addSuccess,
    removeNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
