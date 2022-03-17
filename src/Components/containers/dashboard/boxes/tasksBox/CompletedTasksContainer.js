import React from "react";
import { useFela } from "react-fela";
import H3 from "../../../../presentational/typography/H3";
import CompletedTask from "./CompletedTask";

const CompletedTasksContainer = ({ tasks }) => {
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
        <CompletedTask key={i} checked={item.completed} task={item.task} />
      ))
    );
  };

  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Completed tasks</H3>
      {displayTasks()}
    </div>
  );
};

export default CompletedTasksContainer;
