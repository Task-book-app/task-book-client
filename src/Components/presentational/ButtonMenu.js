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
}) => {
  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela({ padding, fontSize, hoverColor });

  const rules = ({ padding, fontSize, hoverColor }) => ({
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
    <div className={css(rules)} onClick={event}>
      {children}
      {title}
    </div>
  );
};

export default ButtonMenu;
