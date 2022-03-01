import React from "react";
import { useFela } from "react-fela";

const rules = ({ color }) => ({
  color,
  fontFamily: "Semi-bold",
  fontSize: "1.8rem",
  lineHeight: "2.5rem",
  letterSpacing: "0.03rem",
});

const H3 = ({ children, color }) => {
  const { css } = useFela({ color });

  return <h3 className={css(rules)}>{children}</h3>;
};

export default H3;
