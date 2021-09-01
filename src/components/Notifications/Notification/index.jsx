import { useState, useEffect } from 'react';
import { useNotification } from '../../../contexts/NotificationContext';
import {
  NotificationContainer,
  Message,
  ProgressBar,
} from './NotificationStyles';

const Notification = ({ id, type, message }) => {
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [exit, setExit] = useState(false);

  const { removeNotification } = useNotification();

  const startTimer = () => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 0.5;
        }

        clearInterval(interval);
        return prevProgress;
      });
    }, 15);

    setIntervalId(interval);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
  };

  const closeNotification = () => {
    pauseTimer();
    setExit(true);
    setTimeout(() => {
      removeNotification(id);
    }, 400);
  };

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      closeNotification();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return (
    <NotificationContainer
      type={type}
      exit={exit}
      onMouseEnter={pauseTimer}
      onMouseLeave={startTimer}
    >
      <Message>{message}</Message>
      <ProgressBar type={type} style={{ width: `${progress}%` }} />
    </NotificationContainer>
  );
};

export default Notification;
