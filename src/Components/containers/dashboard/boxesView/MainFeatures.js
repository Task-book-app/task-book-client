import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFela } from "react-fela";
import { Outlet } from "react-router-dom";
import Button from "../../../presentational/Button";
import TaskSuccess from "../boxes/TaskSuccess";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Modal from "../../modal/Modal";
import ModalSlide from "../../modal/ModalSlide";
import CreateTaskModal from "../../modal/CreateTaskModal";
import { modalContext } from "../../../../context/ModalProvider";

const MainFeatures = () => {
  const { handleCloseModal, slideAnimation, handleShowModal } =
    useContext(modalContext);
  const { css, theme } = useFela();
  const rules = () => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },
    [theme.breakpoints.tablet]: {
      width: "53%",
    },
    "& .add-task": {
      [theme.breakpoints.laptop]: {
        display: "none",
      },
    },
  });

  return (
    <>
      <div className={css(rules)}>
        <div className="add-task">
          <Button fontSize={1.6} event={handleShowModal}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              transform={{ rotate: 45 }}
              fontSize={"1.6rem"}
            />
            New task
          </Button>
        </div>
        <TaskSuccess />
        <Outlet />
      </div>
      <Modal>
        <ModalSlide slideAnimation={slideAnimation}>
          <CreateTaskModal handleCloseModal={handleCloseModal} />
        </ModalSlide>
      </Modal>
    </>
  );
};

export default MainFeatures;
