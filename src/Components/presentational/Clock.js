import React from "react";
import { useFela } from "react-fela";
import ClockIcon from "./icons/ClockIcon";

const rules = () => ({
  position: "relative",
  margin: "2rem 0",

  "& .container": {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    fontSize: "2.3rem",
    lineHeight: "3.4rem",
    letterSpacing: "0.1em",
    "& > :not(:last-child)": {
      marginRight: "1.2rem",
    },
  },
});

const Clock = ({ time }) => {
  const { css } = useFela();

  return (
    <div className={css(rules)}>
      <div className="container">
        <ClockIcon fontSize={2.3} />
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Clock;
