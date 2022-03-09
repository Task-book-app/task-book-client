import React from "react";
import { useFela } from "react-fela";
import CalendarIcon from "./icons/CalendarIcon";
import { today } from "../../helpers/functions";
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
      <p>
        {new Date(today()).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default DateToday;
