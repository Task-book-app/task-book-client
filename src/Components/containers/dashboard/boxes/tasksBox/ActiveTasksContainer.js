import React from "react";
import H3 from "../../../../presentational/typography/H3";
import { useFela } from "react-fela";
import ActiveTask from "./ActiveTask";
import HeadingSmall from "../../../../presentational/typography/HeadingSmall";

const ActiveTasksContainer = ({ tasks }) => {
  const { css, theme } = useFela();
  const rules = () => ({
    flex: "1 1 auto",

    "& > :not(:last-child)": {
      marginBottom: "1rem",
    },

    "& .no-task": {
      textAlign: "center",
      // height: "90%",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
    },
  });

  const displayTasks = () => {
    return tasks.length === 0 ? (
      <div className="no-task">
        <HeadingSmall>0 tasks created</HeadingSmall>
      </div>
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
