import { createContext, use, useState } from "react";

export const ModalContext = createContext();

export const useModal = () => use(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCloseModal = (e) => {
    if ((e.code && e.code === "Escape") || e.target === e.currentTarget) {
      setModalContent(null);
    }
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, modalContent, openModal, closeModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
