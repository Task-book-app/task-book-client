import React from "react";
import { useFela } from "react-fela";

const rules = () => ({
  border: "none",
  backgroundColor: "unset",
  color: "unset",
  display: "inline-flex",
  cursor: "pointer",
});

const ButtonIcon = ({ children, onClick = null }) => {
  const { css } = useFela(rules);
  return (
    <button className={css(rules)} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonIcon;
