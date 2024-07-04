import React from "react";
import { useFela } from "react-fela";
import Brand from "../../../presentational/Brand";
import H3 from "../../../presentational/typography/H3";
import Categories from "./Categories";
// import Details from "./Details";
import LogOut from "./LogOut";

const SideBar = ({ currentTheme, logoutMutation }) => {
  const {
    css,
    theme: {
      darkModusBoxes,
      scrollBarStyles,
      colors: { blue },
      breakpoints: { laptop },
    },
  } = useFela();

  const rules = () => ({
    width: "16%",
    ...darkModusBoxes(currentTheme),
    minHeight: "100%",
    padding: "2rem",
    display: "none",
    flexDirection: "column",
    overflowX: "scroll",
    ...scrollBarStyles(currentTheme),

    filter: "drop-shadow(0px 10px 25px rgba(29, 52, 54, 0.08))",
    "& > :not(:last-child)": {
      marginBottom: "6rem",
    },
    [laptop]: {
      display: "flex",
    },
  });

  return (
    <div className={css(rules)}>
      <Brand>
        <H3 color={blue}>
          Tasks
          <br />
          Book
        </H3>
      </Brand>
      <Categories />
      {/* <Details /> */}
      <LogOut onClick={logoutMutation} />
    </div>
  );
};

export default SideBar;
