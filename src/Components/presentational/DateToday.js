import React, { useEffect, useState } from "react";
import { useFela } from "react-fela";
import CalendarIcon from "./icons/CalendarIcon";
import { longDate } from "../../helpers/functions";

const rules = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.3rem",
  lineHeight: "3.4rem",
  letterSpacing: "0.02em",
  "& > :not(:last-child)": {
    marginRight: "1.2rem",
  },
});

const DateToday = () => {
  const { css } = useFela();

  const [date, setDate] = useState(longDate());

  useEffect(() => {
    setDate(longDate());
  }, []);

  return (
    <div className={css(rules)}>
      <CalendarIcon fontSize={2.3} />
      <p>{date}</p>
    </div>
  );
};

export default DateToday;
