import { useContext } from "react";
import React from "react";
import { useFela } from "react-fela";
import { modalContext } from "../../../../context/ModalProvider";
import UserTopBarSmallScreen from "./UserTopBarSmallScreen";
import { BrandSmall } from "./BrandSmall";

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
      <BrandSmall />

      <UserTopBarSmallScreen />
    </div>
  );
};

export default TopBarSmallScreen;
