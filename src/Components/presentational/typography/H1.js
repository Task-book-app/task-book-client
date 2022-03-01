// import React from 'react'
import { useFela } from "react-fela";

const rule = ({ color }) => ({
  color,
  fontFamily: "Poppins-Bold",
  fontSize: "3rem",
  lineHeight: "4.8rem",
});

const H1 = ({ children, color }) => {
  const { css } = useFela({ color });

  return <h1 className={css(rule)}>{children}</h1>;
};

export default H1;
