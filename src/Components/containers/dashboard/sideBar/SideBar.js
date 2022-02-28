import React from "react";
import { useFela } from "react-fela";
import Brand from "../../../presentational/Brand";
import H3 from "../../../presentational/typography/H3";
import Categories from "./Categories";
import Details from "./Details";
import LogOut from "./LogOut";

const SideBar = () => {
  const { css, theme } = useFela();

  const rule = () => ({
    width: "16%",
    backgroundColor: theme.colors.white,
    minHeight: "100%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    filter: "drop-shadow(0px 10px 25px rgba(29, 52, 54, 0.08))",
    "& > :not(:last-child)": {
      marginBottom: "6rem",
    },
  });

  return (
    <div className={css(rule)}>
      <Brand>
        <H3 color={theme.colors.blue}>
          Tasks
          <br />
          Book
        </H3>
      </Brand>
      <Categories />
      <Details />
      <LogOut />
    </div>
  );
};

export default SideBar;
