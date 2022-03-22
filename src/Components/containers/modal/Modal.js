import React, { useContext } from "react";
import { modalContext } from "../../../context/ModalProvider";
import BlurredScreen from "./BlurredScreen";
import ModalSlide from "./ModalSlide";

const Modal = ({ component }) => {
  const { showModal, fadeAnimation, slideAnimation } = useContext(modalContext);

  return (
    <>
      <BlurredScreen showModal={showModal} fadeAnimation={fadeAnimation}>
        <ModalSlide slideAnimation={slideAnimation}>{component}</ModalSlide>
      </BlurredScreen>
    </>
  );
};

export default Modal;
