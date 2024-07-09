import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";

const Input = ({
  type,
  value,
  placeholder,
  id,
  name,
  disabled,
  cursor,
  onChange,
  border,
  borderOnFocus,
  caretColor,
}) => {
  const { css, theme } = useFela();

  const { currentTheme } = useContext(appContext);

  const rules = () => ({
    caretColor,
    fontSize: "1.8rem",
    cursor,
    width: "100%",
    background: "inherit",
    color: "inherit",
    padding: "0.8rem 1.5rem",
    fontFamily: "inherit",
    borderRadius: "0.8rem",
    border: border
      ? border
      : "1px solid" +
        (currentTheme === "light"
          ? " rgba(40, 40, 70, 0.2)"
          : " rgba(217, 217, 222, 0.3)"),

    ":focus": {
      boxShadow: theme.shadows.boxShadow_1,
      border: borderOnFocus ? borderOnFocus : `1px solid ${theme.colors.blue}`,
      outline: "none",
    },

    "::placeholder": {
      fontStyle: "italic",
    },
  });
  return (
    <input
      className={css(rules)}
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Input;
