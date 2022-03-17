import React from "react";
import H3 from "../../../../presentational/typography/H3";
import { useFela } from "react-fela";
import ActiveTask from "./ActiveTask";

const ActiveTasksContainer = ({ tasks }) => {
  const { css, theme } = useFela();
  const rules = () => ({
    "& > :not(:last-child)": {
      marginBottom: "1rem",
    },
  });

  const displayTasks = () => {
    return tasks.length === 0 ? (
      <></>
    ) : (
      tasks.map((item, i) => (
        <ActiveTask key={i} checked={item.completed} task={item.task} />
      ))
    );
  };

  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Active tasks</H3>
      {displayTasks()}
    </div>
  );
};

export default ActiveTasksContainer;
