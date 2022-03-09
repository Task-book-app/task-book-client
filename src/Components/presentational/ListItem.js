import React from "react";
import { useFela } from "react-fela";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { combineRules } from "fela";

const ListItem = ({
  title = "",
  fontIcon,
  color = "inherit",
  hover = null,
  fontSize = 1.6,
  link,
}) => {
  const { css, theme } = useFela({ color, hover, fontSize });

  const rules = ({ color, fontSize }) => ({
    color,
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

  const rulesActive = () => ({
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
  });

  const rulesInactive = ({ hover }) => ({
    color,
    ":hover": {
      color: !hover ? theme.colors.blue : hover,
    },
  });

  const activeCombined = combineRules(rules, rulesActive);
  const inactiveCombined = combineRules(rules, rulesInactive);

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          css(isActive ? activeCombined : inactiveCombined)
        }
      >
        <Icon fontIcon={fontIcon} />
        {title}
      </NavLink>
    </li>
  );
};

export default ListItem;
