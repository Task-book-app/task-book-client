import React from "react";
import { useFela } from "react-fela";
import CalendarIcon from "./icons/CalendarIcon";

const rules = () => ({
  position: "relative",
  width: "1.8rem",
  height: "1.8rem",
  "& .datepicker-toggle-button": {
    position: "absolute",
    // left: 0,
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  "& .datepicker-input": {
    position: "absolute",
    // left: 0,
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
    "&::-webkit-calendar-picker-indicator": {
      position: "absolute",
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      cursor: "pointer",
    },
  },
});

const ToogleCalendar = () => {
  const { css } = useFela();
  return (
    <span className={css(rules)}>
      <span className="datepicker-toggle-button">
        <CalendarIcon fontSize={1.8} />
      </span>
      <input type="date" className="datepicker-input" />
    </span>
  );
};

export default ToogleCalendar;
