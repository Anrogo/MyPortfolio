import { useEffect, type ReactNode } from 'react';
import {
  Hr,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalSectionTitle,
} from './Modal.styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const bodyOverflow = document.body.style.overflow;
    const documentOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = documentOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <ModalHeader>
          <ModalSectionTitle id="modal-title">{title}</ModalSectionTitle>
          <ModalCloseButton type="button" onClick={onClose} aria-label="Cerrar">
            ×
          </ModalCloseButton>
        </ModalHeader>
        <Hr />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
