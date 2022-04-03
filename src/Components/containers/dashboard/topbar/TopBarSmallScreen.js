import { useContext } from "react";
import React from "react";
import { useFela } from "react-fela";
import { modalContext } from "../../../../context/ModalProvider";
import UserTopBarSmallScreen from "./UserTopBarSmallScreen";
import BrandSmall from "./BrandSmall";
import Modal from "../../modal/Modal";
import ModalSideBar from "../../modal/ModalSideBar";
import SideBarSmallScreen from "../sideBar/SideBarSmallScreen";

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
  const { handleShowModal, handleCloseModal, sideBarAnimation } =
    useContext(modalContext);
  return (
    <>
      <div className={css(rules)}>
        <BrandSmall onClick={handleShowModal} />
        <UserTopBarSmallScreen />
        <Modal>
          <ModalSideBar sideBarAnimation={sideBarAnimation}>
            <SideBarSmallScreen handleCloseModal={handleCloseModal} />
          </ModalSideBar>
        </Modal>
      </div>
    </>
  );
};

export default TopBarSmallScreen;
