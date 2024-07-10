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
  const {
    css,
    theme: {
      breakpoints: { tablet, laptop, laptop_L },
    },
  } = useFela();
  const rules = () => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginRight: "2rem",
    marginBottom: "2rem",

    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },

    [`${tablet} and (max-width: 90em)`]: {
      width: "53%",
      marginRight: "2rem",
      marginBottom: "2rem",
    },

    [laptop_L]: {
      width: "53%",
      marginRight: "3rem",
      marginBottom: "3rem",
      "& > :not(:last-child)": {
        marginBottom: "3rem",
      },
    },

    "& .add-task": {
      [laptop]: {
        display: "none",
      },
    },
  });

  return (
    <>
      <div className={css(rules)}>
        <div className="add-task">
          <Button fontSize={1.8} event={handleShowModal}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              transform={{ rotate: 45 }}
              fontSize={"1.8rem"}
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
