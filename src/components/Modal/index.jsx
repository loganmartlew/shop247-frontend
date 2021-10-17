import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { ModalPageWrapper, ModalContainer, ModalCloseBtn } from './ModalStyles';

const Modal = ({ open, setOpen, children }) => {
  const wrapperClickHandler = e => {
    if (e.target.dataset.wrapper) {
      setOpen(false);
    }
  };

  const modalComponent = (
    <ModalPageWrapper onClick={wrapperClickHandler} data-wrapper>
      <ModalContainer>
        <ModalCloseBtn onClick={() => setOpen(false)}>
          <MdClose />
        </ModalCloseBtn>
        {children}
      </ModalContainer>
    </ModalPageWrapper>
  );

  return createPortal(
    open && modalComponent,
    document.getElementById('modal-root')
  );
};

export default Modal;
