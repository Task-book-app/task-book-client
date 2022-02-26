import React from "react";
import { useFela } from "react-fela";
import { NavLink } from "react-router-dom";

const ListItem = () => {
  const { css, theme } = useFela();

  const linkRuleActive = () => ({
    color: "purple",
    ":after": {
      content: '" "',
      display: "block",
      width: "50px",
      height: "50px",
      backgroundColor: "purple",
    },
  });

  const linkRuleInactive = () => ({
    color: "red",
  });

  return (
    <li>
      <NavLink
        to="view/list-item"
        className={({ isActive }) =>
          css(isActive ? linkRuleActive : linkRuleInactive)
        }
      >
        List Item
      </NavLink>
    </li>
  );
};

export default ListItem;
