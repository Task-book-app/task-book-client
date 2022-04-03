import React, { useContext } from "react";
import { modalContext } from "../../../context/ModalProvider";
import BlurredScreen from "./BlurredScreen";

const Modal = ({ children }) => {
  const { showModal, fadeAnimation, handleCloseModal } =
    useContext(modalContext);

  return (
    <BlurredScreen
      showModal={showModal}
      fadeAnimation={fadeAnimation}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        handleCloseModal();
      }}
    >
      {children}
    </BlurredScreen>
  );
};

export default Modal;
