import { createPortal } from 'react-dom';
import Notification from './Notification';
import { useNotification } from '../../contexts/NotificationContext';
import { NotificationArea } from './NotificationsStyles';

const ErrorModal = () => {
  const { notifications } = useNotification();

  const notificationsArr = (
    <NotificationArea>
      {notifications.map(notification => (
        <Notification key={notification.id} {...notification} />
      ))}
    </NotificationArea>
  );

  return createPortal(notificationsArr, document.body);
};

export default ErrorModal;
