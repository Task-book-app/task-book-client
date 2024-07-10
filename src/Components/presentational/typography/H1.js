// import React from 'react'
import { useFela } from "react-fela";

const rule = ({ color, fontSize, lineHeight, textAlign }) => ({
  textAlign,
  color,
  fontFamily: "Poppins-Bold",
  fontSize: fontSize ? `${fontSize}rem` : "3rem",
  lineHeight: lineHeight ? `${lineHeight}rem` : "4.8rem",
});

const H1 = ({ children, color, fontSize, lineHeight, textAlign }) => {
  const { css } = useFela({ color, fontSize, lineHeight, textAlign });

  return <h1 className={css(rule)}>{children}</h1>;
};

export default H1;
