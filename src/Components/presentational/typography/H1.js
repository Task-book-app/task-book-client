// import React from 'react'
import { useFela } from "react-fela";

const rule = ({ color, fontSize, lineHeight }) => ({
  color,
  fontFamily: "Poppins-Bold",
  fontSize: fontSize ? `${fontSize}rem` : "3rem",
  lineHeight: lineHeight ? `${lineHeight}rem` : "4.8rem",
});

const H1 = ({ children, color, fontSize, lineHeight }) => {
  const { css } = useFela({ color, fontSize, lineHeight });

  return <h1 className={css(rule)}>{children}</h1>;
};

export default H1;
