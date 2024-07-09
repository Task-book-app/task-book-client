import React from "react";
import { useFela } from "react-fela";

const rules = ({ color }) => ({
  color,
  fontSize: "1.6rem",
  lineHeight: "1.9rem",
  letterSpacing: "0.02em",
});

const HeadingSmall = ({ children, color }) => {
  const { css } = useFela({ color });

  return <p className={css(rules)}>{children}</p>;
};

export default HeadingSmall;
