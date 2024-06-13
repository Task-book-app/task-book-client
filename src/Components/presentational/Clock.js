import React from "react";
import { useFela } from "react-fela";
import ClockIcon from "./icons/ClockIcon";

const rules = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.3rem",
  lineHeight: "3.4rem",
  letterSpacing: "0.1em",
  "& > :not(:last-child)": {
    marginRight: "1.2rem",
  },
});

const Clock = ({ time }) => {
  const { css } = useFela();

  return (
    <div className={css(rules)}>
      <ClockIcon fontSize={2.3} />
      <p>{time}</p>
    </div>
  );
};

export default Clock;
