import React from "react";
import { useFela } from "react-fela";
import TasksBox from "../boxes/TasksBox";
import TaskSuccess from "../boxes/TaskSuccess";

const rules = () => ({
  width: "53%",
  display: "flex",
  flexDirection: "column",
  "& > :not(:last-child)": {
    marginBottom: "3rem",
  },
});

const MainFeatures = () => {
  const { css } = useFela();

  return (
    <div className={css(rules)}>
      <TaskSuccess />
      <TasksBox />
    </div>
  );
};

export default MainFeatures;
