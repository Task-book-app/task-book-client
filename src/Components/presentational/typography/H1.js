// import React from 'react'
import { useFela } from "react-fela";

const H1 = ({ children, color }) => {
  const { css, theme } = useFela({ color });

  const rule = ({ color }) => ({
    color,
    fontFamily: theme.fontFamily.poppinsBold,
    fontSize: "3rem",
    lineHeight: "4.8rem",
  });

  return <h1 className={css(rule)}>{children}</h1>;
};

export default H1;
