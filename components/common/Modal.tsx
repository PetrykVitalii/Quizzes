import React from 'react';
import styled from 'styled-components';

import useOnClickOutside from '@/components/hooks/useOnClickOutside';
import useWindowScrollBlock from '@/components/hooks/useWindowScrollBlock';
import useKeyPress from '@/components/hooks/useKeyPress';
import TickIcon from '../icons/Tick';

interface Props {
  title: string,
  closeModal: () => void,
}

const Modal: React.FC<Props> = ({
  title,
  closeModal,
}) => {
  const modalRef = useOnClickOutside(closeModal);
  const escPress = useKeyPress('Esc');
  const escapePress = useKeyPress('Escape');

  useWindowScrollBlock();

  React.useEffect(() => {
    if (escPress || escapePress) {
      closeModal();
    }
  }, [escPress, escapePress]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    closeModal();
  };

  const handlePrevent = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <ModalWrapper onClick={handleClose}>
      <ModalContentInfo onClick={handlePrevent} ref={modalRef as any}>
        <TickIcon />
        <Title>{title}</Title>
      </ModalContentInfo>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(33, 33, 33, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 16px;
`;

const ModalContent = styled.div`
  margin: 0 auto;
  padding: 32px 48px;
  border-radius: 16px;
  width: 420px;
  position: relative;
`;

const ModalContentInfo = styled(ModalContent)`
  padding: 40px 0;
  width: 403px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 16px;
`;

export default Modal;
