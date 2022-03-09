import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Button from "../../../presentational/Button";
import { useFela } from "react-fela";
import UserTopBar from "./UserTopBar";
import ToogleDarkMode from "../../../presentational/ToogleDarkMode";
import Modal from "../../modal/Modal";
import { modalContext } from "../../../../context/ModalProvider";
import CreateTaskModal from "../../modal/CreateTaskModal";

const rules = () => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TopBar = () => {
  const { css } = useFela();

  // context to hook animations Modal, parent component is wrapped in the ModalProvider
  // ModalProvider contains the logic for displaying modal with animation
  const { handleShowModal, handleCloseModal } = useContext(modalContext);

  return (
    <div className={css(rules)}>
      <Modal
        component={<CreateTaskModal handleCloseModal={handleCloseModal} />}
      />
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
  );
};

export default TopBar;
