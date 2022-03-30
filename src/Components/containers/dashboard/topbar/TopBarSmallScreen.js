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
import Brand from "../../../presentational/Brand";
import H3 from "../../../presentational/typography/H3";
import UserTopBarSmallScreen from "./UserTopBarSmallScreen";
import BurgerMenuIcon from "../../../presentational/icons/BurgerMenuIcon";
import SpiralLogoIcon from "../../../presentational/icons/SpiralLogoIcon";

const TopBarSmallScreen = () => {
  const { css, theme } = useFela();

  const rules = () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.laptop]: {
      display: "none",
    },
  });

  // context to hook animations Modal, parent component is wrapped in the ModalProvider
  // ModalProvider contains the logic for displaying modal with animation
  const { handleShowModal, handleCloseModal } = useContext(modalContext);

  return (
    <div className={css(rules)}>
      <Modal
        component={<CreateTaskModal handleCloseModal={handleCloseModal} />}
      />
      <BurgerMenuIcon fontSize={3.5} />
      <SpiralLogoIcon fontSize={5} />
      <Brand>
        <H3 color={theme.colors.blue}>
          Tasks
          <br />
          Book
        </H3>
      </Brand>

      <UserTopBarSmallScreen />
    </div>
  );
};

export default TopBarSmallScreen;
