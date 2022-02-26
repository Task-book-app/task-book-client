import React from "react";
import H2 from "../../../presentational/typography/H2";
import H4 from "../../../presentational/typography/H4";
import { useFela } from "react-fela";
import Icon from "../../../presentational/Icon";
import {
  faHome,
  faUserGroup,
  faSuitcase,
  faPersonRunning,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const { css, theme } = useFela();

  const categories = () => ({
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },
  });

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

  return (
    <div className={css(categories)}>
      <H2 color={theme.colors.blue}>Categories</H2>
      <ul className={css(rules)}>
        <li>
          <Icon fontIcon={faHome} />
          <H4>Home</H4>
        </li>
        <li>
          <Icon fontIcon={faUserGroup} />
          <H4>Family</H4>
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
      </ul>
    </div>
  );
};

export default Categories;
