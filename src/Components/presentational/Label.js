import React from "react";
import { useFela } from "react-fela";

const Label = ({ children, htmlFor }) => {
  const { css } = useFela();
  const rules = () => ({
    display: "none",
  });
  return (
    <>
      <span>{children}</span>
      <label htmlFor={htmlFor} className={css(rules)}></label>
    </>
  );
};

export default Label;
