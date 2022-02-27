import React from "react";
import H2 from "../../../presentational/typography/H2";
import { useFela } from "react-fela";
import ListContainer from "./ListContainer";
import {
  faClipboard,
  faHome,
  faUserGroup,
  faSuitcase,
  faPersonRunning,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "./ListItem";

const Categories = () => {
  const { css, theme } = useFela();

  const categories = () => ({
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },
  });

  return (
    <div className={css(categories)}>
      <H2 color={theme.colors.blue}>Categories</H2>
      <ListContainer>
        <ListItem title={"All"} fontIcon={faClipboard} />
        <ListItem title={"Home"} fontIcon={faHome} />
        <ListItem title={"Family"} fontIcon={faUserGroup} />
        <ListItem title={"Work"} fontIcon={faSuitcase} />
        <ListItem title={"Sports"} fontIcon={faPersonRunning} />
        <ListItem
          title={"Add"}
          fontIcon={faSquarePlus}
          color={theme.colors.blue}
        />
      </ListContainer>
    </div>
  );
};

export default Categories;
