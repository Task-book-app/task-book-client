import React from "react";
import { useFela } from "react-fela";

const ModalSlide = ({ children, slideAnimation }) => {
  const { css } = useFela();
  return <div className={css(slideAnimation)}>{children}</div>;
};

export default ModalSlide;
