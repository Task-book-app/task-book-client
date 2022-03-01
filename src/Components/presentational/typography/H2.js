// import React from 'react'
import { useFela } from "react-fela";

const rules = ({ color }) => ({
  color,
  fontFamily: "Semi-bold",
  fontSize: "2.4rem",
  lineHeight: "3.3rem",
  letterSpacing: "0.03rem",
});

const H2 = ({ color, children }) => {
  const { css } = useFela({ color });

  return <h2 className={css(rules)}>{children}</h2>;
};

export default H2;
