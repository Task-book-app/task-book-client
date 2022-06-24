import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import Brand from "../../../presentational/Brand";
import H3 from "../../../presentational/typography/H3";
import Categories from "./Categories";
import Details from "./Details";
import LogOut from "./LogOut";

const SideBar = () => {
  const { css, theme } = useFela();

  const { currentTheme, logoutMutation } = useContext(appContext);

  const rules = () => ({
    width: "16%",
    ...theme.darkModusBoxes(currentTheme),
    minHeight: "100%",
    padding: "2rem",
    display: "none",
    flexDirection: "column",
    overflow: "scroll",
    filter: "drop-shadow(0px 10px 25px rgba(29, 52, 54, 0.08))",
    "& > :not(:last-child)": {
      marginBottom: "6rem",
    },
    [theme.breakpoints.laptop]: {
      display: "flex",
    },
  });

  return (
    <div className={css(rules)}>
      <Brand>
        <H3 color={theme.colors.blue}>
          Tasks
          <br />
          Book
        </H3>
      </Brand>
      <Categories />
      <Details />
      <LogOut onClick={logoutMutation} />
    </div>
  );
};

export default SideBar;
