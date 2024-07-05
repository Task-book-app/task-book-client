// import React, { useContext } from "react";
import { useFela } from "react-fela";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const ListItem = ({ title = "", fontIcon, fontSize = 1.6, link }) => {
  const { css, theme } = useFela({ fontSize });

  const rules = ({ fontSize }) => ({
    fontSize: `${fontSize}rem`,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    position: "relative",
    ":after": {
      content: '" "',

      position: "absolute",
      display: "block",

      right: "-2rem",
      bottom: "0.3rem",

      borderRadius: "10px 0px 0px 10px",

      transform: "scaleX(0)",
    },

    "& > :first-child": {
      marginRight: "1rem",
    },
  });

  const activeItemSideBar = {
    color: theme.colors.blue,

    ":after": {
      content: '" "',

      position: "absolute",
      display: "block",
      background: theme.gradients.blueGradient,

      width: "3rem",
      height: "1.8rem",

      borderRadius: "10px 0px 0px 10px",

      transition: "transform 0.5s ease",
      transformOrigin: "right",
      transform: "scaleX(1)",
    },
  };

  const inactiveItemSideBar = {
    color: "inherit",
    transition: "all linear",
    ":link": {
      color: "inherit",
    },
    ":visited": {
      color: "inherit",
    },
    ":hover": {
      color: theme.colors.blue,
    },
  };

  return (
    <li>
      <NavLink
        to={`task/${link}`}
        className={({ isActive }) =>
          css(rules, isActive ? activeItemSideBar : inactiveItemSideBar)
        }
      >
        <Icon fontIcon={fontIcon} />
        {title}
      </NavLink>
    </li>
  );
};

export default ListItem;
