import { useNotification } from '../../../contexts/NotificationContext';

const ProfilePage = () => {
  const { addError, addWarn, addSuccess } = useNotification();

  const getRand = () => (Math.random() * 100).toFixed(0);

  const error = e => {
    e.preventDefault();

    const rand = getRand();

    addError('Error ' + rand);
  };

  const warn = e => {
    e.preventDefault();

    const rand = getRand();

    addWarn('Warn ' + rand);
  };

  const success = e => {
    e.preventDefault();

    const rand = getRand();

    addSuccess('Success ' + rand);
  };

  return (
    <>
      <h1>Profile</h1>
      <button onClick={error}>Error</button>
      <button onClick={warn}>Warn</button>
      <button onClick={success}>Success</button>
    </>
  );
};

export default ProfilePage;
