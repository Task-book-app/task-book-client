import React from "react";
import { useFela } from "react-fela";
import H3 from "../../../../presentational/typography/H3";
import CompletedTask from "./CompletedTask";
import HeadingSmall from "../../../../presentational/typography/HeadingSmall";

const CompletedTasksContainer = ({ tasks }) => {
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
        <HeadingSmall>0 Tasks completed</HeadingSmall>
      </div>
    ) : (
      tasks.map((item) => (
        <CompletedTask
          key={item.id}
          id={item.id}
          checked={item.completed}
          task={item.task}
        />
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
