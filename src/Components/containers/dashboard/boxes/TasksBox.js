import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import H3 from "../../../presentational/typography/H3";
import { Outlet } from "react-router-dom";

const TasksBox = () => {
  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
  });
  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Active tasks</H3>
      <Outlet />
      <H3 color={theme.colors.blue}>Completed tasks</H3>
      <Outlet />
    </div>
  );
};

export default TasksBox;
