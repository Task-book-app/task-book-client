import React from "react";
import { useFela } from "react-fela";

const rules = ({ color, lineHeight, fontFamily }) => ({
  color,
  fontFamily: fontFamily ? fontFamily : "Semi-bold",
  fontSize: "1.8rem",
  lineHeight: lineHeight ? lineHeight : "2.2rem",
  letterSpacing: "0.025rem",
});

const H4 = ({ children, color, lineHeight, fontFamily }) => {
  const { css } = useFela({ color, lineHeight, fontFamily });

  return <h4 className={css(rules)}>{children}</h4>;
};

export default H4;
