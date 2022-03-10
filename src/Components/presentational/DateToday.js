import React from "react";
import { useFela } from "react-fela";
import CalendarIcon from "./icons/CalendarIcon";
import { longDate } from "../../helpers/functions";
const rules = () => ({
  display: "flex",
  alignItems: "center",
  fontSize: "2.3rem",
  lineHeight: "3.4rem",
  letterSpacing: "0.02em",
  "& > :not(:last-child)": {
    marginRight: "1.2rem",
  },
});

const DateToday = () => {
  const { css } = useFela();
  return (
    <div className={css(rules)}>
      <CalendarIcon fontSize={2.3} />
      <p>{longDate()}</p>
    </div>
  );
};

export default DateToday;
