import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";
import { today } from "../../helpers/functions";

const DatePicker = ({ name, id, value, onChange }) => {
  const { currentTheme } = useContext(appContext);

  const { css, theme } = useFela();

  const rules = () => ({
    width: "100%",
    background: "inherit",
    color: "inherit",
    padding: "0.7rem 1.4rem",
    fontFamily: "inherit",
    borderRadius: "0.8rem",
    fontStyle: "italic",
    border:
      "1px solid" +
      (currentTheme === "light"
        ? " rgba(40, 40, 70, 0.2)"
        : " rgba(217, 217, 222, 0.3)"),

    ":focus": {
      boxShadow: theme.shadows.boxShadow_1,
      border: `1px solid ${theme.colors.blue}`,
      outline: "none",
    },
    "::-webkit-calendar-picker-indicator": {
      cursor: "pointer",
      filter: "invert(50%)",
    },
  });

  return (
    <input
      className={css(rules)}
      id={id}
      name={name}
      type="date"
      value={value}
      onChange={onChange}
      min={today()}
    />
  );
};

export default DatePicker;
