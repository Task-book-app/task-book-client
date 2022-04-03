import React from "react";
import { useFela } from "react-fela";

const ModalSideBar = ({ children, sideBarAnimation }) => {
  const { css } = useFela();

  const rules = {
    position: "absolute",
    top: "0",
    left: "0",
  };
  return <div className={css(sideBarAnimation, rules)}>{children}</div>;
};

export default ModalSideBar;
