// import React from 'react'
import { useFela } from "react-fela";

const rule = ({ color, fontSize, lineHeight, textAlign, opacity }) => ({
  textAlign,
  color,
  opacity,
  fontFamily: "Poppins-Bold",
  fontSize: fontSize ? `${fontSize}rem` : "3rem",
  lineHeight:
    lineHeight === "unset"
      ? "unset"
      : lineHeight
      ? `${lineHeight}rem`
      : "4.8rem",
});

const H1 = ({ children, color, fontSize, lineHeight, textAlign, opacity }) => {
  const { css } = useFela({ color, fontSize, lineHeight, textAlign, opacity });

  return <h1 className={css(rule)}>{children}</h1>;
};

export default H1;
