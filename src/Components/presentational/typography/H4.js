import React from "react";
import { useFela } from "react-fela";

const rules = ({ color }) => ({
  color,
  fontFamily: "Semi-bold",
  fontSize: "1.6rem",
  lineHeight: "2.2rem",
  letterSpacing: "0.025rem",
});

const H4 = ({ children, color }) => {
  const { css } = useFela({ color });

  return <h4 className={css(rules)}>{children}</h4>;
};

export default H4;
