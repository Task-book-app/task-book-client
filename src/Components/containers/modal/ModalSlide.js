import React from "react";
import { useFela } from "react-fela";

const ModalSlide = ({ children, slideAnimation }) => {
  const { css } = useFela();
  const rules = {
    position: "absolute",
    top: "50%",
    left: "50%",
  };
  return <div className={css(slideAnimation, rules)}>{children}</div>;
};

export default ModalSlide;
