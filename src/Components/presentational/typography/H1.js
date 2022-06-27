// import React from 'react'
import { useFela } from "react-fela";

const rule = ({ color, fontSize }) => ({
  color,
  fontFamily: "Poppins-Bold",
  fontSize: fontSize ? `${fontSize}rem` : "3rem",
  lineHeight: "4.8rem",
});

const H1 = ({ children, color, fontSize }) => {
  const { css } = useFela({ color, fontSize });

  return <h1 className={css(rule)}>{children}</h1>;
};

export default H1;
