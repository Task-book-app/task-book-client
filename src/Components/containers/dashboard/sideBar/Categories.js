import React from "react";
import H2 from "../../../presentational/typography/H2";
import { useFela } from "react-fela";
import ListContainer from "../ListContainer";
import {
  faClipboard,
  faBroom,
  faUserGroup,
  faSuitcase,
  faPersonRunning,
  // faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../../../presentational/ListItem";

const Categories = ({ onClick = null }) => {
  const { css, theme } = useFela();

  const categories = () => ({
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },
  });

  return (
    <div className={css(categories)}>
      <H2 color={theme.colors.blue}>Categories</H2>
      <ListContainer marginBottom={3}>
        <ListItem title={"All"} link={"all"} fontIcon={faClipboard} />
        <ListItem title={"Housework"} link={"housework"} fontIcon={faBroom} />
        <ListItem title={"Family"} link={"family"} fontIcon={faUserGroup} />
        <ListItem title={"Work"} link={"work"} fontIcon={faSuitcase} />
        <ListItem title={"Sports"} link={"sports"} fontIcon={faPersonRunning} />
        {/* <ListItem
          title={"Add"}
          link={"add"}
          fontIcon={faSquarePlus}
          // color={theme.colors.blue}
        /> */}
      </ListContainer>
    </div>
  );
};

export default Categories;
