// import React from 'react'
import { useFela } from "react-fela";

const rules = ({ color, textAlign }) => ({
  textAlign,
  color,
  fontFamily: "Semi-bold",
  fontSize: "2.4rem",
  lineHeight: "3.3rem",
  letterSpacing: "0.03rem",
});

const H2 = ({ color, children, textAlign }) => {
  const { css } = useFela({ color, textAlign });

  return <h2 className={css(rules)}>{children}</h2>;
};

export default H2;
