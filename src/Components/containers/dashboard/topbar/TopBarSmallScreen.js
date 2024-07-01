import { useContext } from "react";
import React from "react";
import { useFela } from "react-fela";
import { modalContext } from "../../../../context/ModalProvider";
import UserTopBarSmallScreen from "./UserTopBarSmallScreen";
import BrandSmall from "./BrandSmall";
import Modal from "../../modal/Modal";
import ModalSideBar from "../../modal/ModalSideBar";
import SideBarSmallScreen from "../sideBar/SideBarSmallScreen";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import SpiralLogoIcon from "../../../presentational/icons/SpiralLogoIcon";
import H3 from "../../../presentational/typography/H3";

const TopBarSmallScreen = () => {
  const {
    css,
    theme: {
      breakpoints: { laptop },
      colors: { blue },
    },
  } = useFela();

  const rules = () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [laptop]: {
      display: "none",
    },
  });
  // context to hook animations Modal, parent component is wrapped in the ModalProvider
  // ModalProvider contains the logic for displaying modal with animation
  const { handleShowModal, handleCloseModal, sideBarAnimation } =
    useContext(modalContext);
  return (
    <>
      <div className={css(rules)}>
        <BrandSmall>
          <BurgerMenu fontSize={3} onClick={handleShowModal} />
          <Link to="/dashboard">
            <div className="brand">
              <SpiralLogoIcon fontSize={4.5} />
              <H3 color={blue}>
                Tasks
                <br />
                Book
              </H3>
            </div>
          </Link>
        </BrandSmall>
        <UserTopBarSmallScreen />
      </div>
      <Modal>
        <ModalSideBar sideBarAnimation={sideBarAnimation}>
          <SideBarSmallScreen handleCloseModal={handleCloseModal} />
        </ModalSideBar>
      </Modal>
    </>
  );
};

export default TopBarSmallScreen;
