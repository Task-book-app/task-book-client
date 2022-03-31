import React, { useContext } from "react";
import { modalContext } from "../../../context/ModalProvider";
import BlurredScreen from "./BlurredScreen";
import ModalSlide from "./ModalSlide";

const Modal = ({ component }) => {
  const { showModal, fadeAnimation, slideAnimation, handleCloseModal } =
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
      <ModalSlide slideAnimation={slideAnimation}>{component}</ModalSlide>
    </BlurredScreen>
  );
};

export default Modal;
