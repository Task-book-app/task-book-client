import React from "react";
import { useFela } from "react-fela";
import { NavLink } from "react-router-dom";
import Icon from "../../../presentational/Icon";
import H4 from "../../../presentational/typography/H4";
import { combineRules } from "fela";

const ListItem = ({
  title = "",
  fontIcon,
  color = "inherit",
  hover = null,
}) => {
  const { css, theme } = useFela({ color, hover });

  const rules = ({ color }) => ({
    color,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    position: "relative",
    transition: "all .5s ease",

    ":before": {
      content: '" "',

      position: "absolute",
      display: "block",

      right: "-2rem",
      bottom: "0.3rem",

      borderRadius: "10px 0px 0px 10px",

      transform: "scaleX(0)",
    },

    "& > :first-child": {
      marginRight: "2rem",
    },
  });

  const rulesActive = () => ({
    color: theme.colors.blue,

    ":before": {
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
        to={`view/${title.toLowerCase()}`}
        className={({ isActive }) =>
          css(isActive ? activeCombined : inactiveCombined)
        }
      >
        <Icon size={1.5} fontIcon={fontIcon} />
        <H4>{title}</H4>
      </NavLink>
    </li>
  );
};

export default ListItem;
