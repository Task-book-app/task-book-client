import React from "react";
import { useFela } from "react-fela";
import {
  faHome,
  faUserGroup,
  faSuitcase,
  faPersonRunning,
  faSquarePlus,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../presentational/Icon";
import H4 from "../../../presentational/typography/H4";
import { NavLink } from "react-router-dom";
import ListItem from "./ListItem";

const CategoriesList = () => {
  const { css, theme } = useFela();

  const rules = () => ({
    "& li": {
      position: "relative",
      cursor: "pointer",
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      ":hover": {
        color: theme.colors.blue,
      },
      "& > :first-child": {
        marginRight: "2rem",
      },
    },
    "& > :last-child": {
      color: theme.colors.blue,
    },
    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },
  });

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
    <ul className={css(rules)}>
      <li>
        <NavLink
          to="view/all"
          className={({ isActive }) =>
            css(isActive ? linkRuleActive : linkRuleInactive)
          }
        >
          <Icon fontIcon={faClipboard} />
          <H4>All</H4>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="view/home"
          className={({ isActive }) =>
            css(isActive ? linkRuleActive : linkRuleInactive)
          }
        >
          <Icon fontIcon={faHome} />
          <H4>Home</H4>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="view/Family"
          className={({ isActive }) =>
            css(isActive ? linkRuleActive : linkRuleInactive)
          }
        >
          <Icon fontIcon={faUserGroup} />
          <H4>Family</H4>
        </NavLink>
      </li>
      <li>
        <Icon fontIcon={faSuitcase} />
        <H4>Work</H4>
      </li>
      <li>
        <Icon fontIcon={faPersonRunning} />
        <H4>Sports</H4>
      </li>
      <li>
        <Icon fontIcon={faSquarePlus} />
        <H4>Add</H4>
      </li>
      <ListItem />
    </ul>
  );
};

export default CategoriesList;
