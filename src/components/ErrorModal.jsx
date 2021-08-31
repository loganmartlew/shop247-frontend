import { createPortal } from 'react-dom';
import { useError } from '../contexts/ErrorContext';

const ErrorModal = () => {
  const { errorMsg } = useError();

  return createPortal(<div>{errorMsg}</div>, document.body);
};

export default ErrorModal;
