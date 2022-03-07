import React from "react";
import { useFela } from "react-fela";
import CalendarIcon from "./icons/CalendarIcon";

const rules = ({}) => ({});

const DatePicker = () => {
  const { css } = useFela();

  return (
    <>
      <CalendarIcon />
      <input type="date" className={css(rules)} />
    </>
  );
};

export default DatePicker;
