import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";

const ButtonMenu = ({
  children,
  padding,
  fontSize = 1.2,
  title,
  event = null,
  hoverColor,
  switchOffBg = false,
  id,
  dataValue,
  name,
}) => {
  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela({ padding, fontSize, hoverColor });

  const rules = ({ padding, fontSize, hoverColor }) => ({
    backgroundColor: "unset",
    width: "100%",

    border: "none",
    padding,
    cursor: "pointer",
    textDecoration: "none",

    display: "flex",
    alignItems: "center",

    fontSize: `${fontSize}rem`,
    lineHeight: "1.5rem",

    "& > :first-child": {
      marginRight: "1rem",
    },

    color: "inherit",
    ":visited": {
      color: "inherit",
    },

    ":hover": switchOffBg
      ? { color: hoverColor ? hoverColor : theme.colors.blue }
      : {
          ...theme.darkModusDropDown(currentTheme),
          color: hoverColor ? hoverColor : theme.colors.blue,
        },
  });

  return (
    <button
      data-value={dataValue}
      name={name}
      className={css(rules)}
      onClick={event}
      id={id}
    >
      {children}
      {title}
    </button>
  );
};

export default ButtonMenu;
