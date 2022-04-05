import { useContext } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../presentational/Button";
import { useFela } from "react-fela";
import UserTopBar from "./UserTopBar";
import ToogleDarkMode from "../../../presentational/ToogleDarkMode";
import Modal from "../../modal/Modal";
import { modalContext } from "../../../../context/ModalProvider";
import CreateTaskModal from "../../modal/CreateTaskModal";
import ModalSlide from "../../modal/ModalSlide";

const TopBar = () => {
  const { css, theme } = useFela();

  const rules = () => ({
    display: "none",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.laptop]: {
      display: "flex",
    },
  });

  // context to hook animations Modal, parent component is wrapped in the ModalProvider
  // ModalProvider contains the logic for displaying modal with animation
  const { handleShowModal, handleCloseModal, slideAnimation } =
    useContext(modalContext);

  return (
    <>
      <div className={css(rules)}>
        <Button width={"auto"} fontSize={1.6} event={handleShowModal}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            transform={{ rotate: 45 }}
            fontSize={"1.6rem"}
          />
          New task
        </Button>
        <ToogleDarkMode />
        <UserTopBar />
      </div>
      <Modal>
        <ModalSlide slideAnimation={slideAnimation}>
          <CreateTaskModal handleCloseModal={handleCloseModal} />
        </ModalSlide>
      </Modal>
    </>
  );
};

export default TopBar;
