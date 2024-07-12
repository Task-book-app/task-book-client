import React from "react";
import { useFela } from "react-fela";

const rules = ({ color, lineHeight, fontFamily }) => ({
  color,
  fontFamily: fontFamily ? fontFamily : "Semi-bold",
  fontSize: "2rem", //antes 1.8rem
  lineHeight: lineHeight ? `${lineHeight}rem` : "2.5rem",
  letterSpacing: "0.03rem",
});

const H3 = ({ children, color, lineHeight, fontFamily }) => {
  const { css } = useFela({ color, lineHeight, fontFamily });

  return <h3 className={css(rules)}>{children}</h3>;
};

export default H3;
