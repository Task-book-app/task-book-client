import React from "react";
import { useFela } from "react-fela";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const TaskView = () => {
  const { css } = useFela();

  const rules = () => ({
    padding: "2rem 7rem",
    flex: "1 1 auto",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  });
  return (
    <div className={css(rules)}>
      <TopBar />
      <Outlet />
    </div>
  );
};

export default TaskView;
