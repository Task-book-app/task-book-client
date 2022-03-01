import React from "react";
import ListContainer from "../ListContainer";
import ListItem from "../../../presentational/ListItem";
import {
  faSquarePollVertical,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { useFela } from "react-fela";
import H2 from "../../../presentational/typography/H2";

const Details = () => {
  const { css, theme } = useFela();

  const rules = () => ({
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },
  });

  return (
    <div className={css(rules)}>
      <H2 color={theme.colors.blue}>Details</H2>
      <ListContainer marginBottom={3}>
        <ListItem title="Statistics" fontIcon={faSquarePollVertical} />
        <ListItem title="Compare" fontIcon={faChartLine} />
      </ListContainer>
    </div>
  );
};

export default Details;
