import React from "react";
import H3 from "../../../../presentational/typography/H3";
import { useFela } from "react-fela";
import ActiveTask from "./ActiveTask";
import HeadingSmall from "../../../../presentational/typography/HeadingSmall";

const ActiveTasksContainer = ({ tasks }) => {
  const { css, theme } = useFela();
  const rules = () => ({
    "& .headings": {
      display: "flex",
      justifyContent: "space-between",
    },
  });

  const displayTasks = () =>
    tasks.map((item) => (
      <ActiveTask
        key={item.id}
        id={item.id}
        checked={item.completed}
        task={item.task}
      />
    ));

  return (
    <div className={css(rules)}>
      <div className="headings">
        <H3 color={theme.colors.blue}>Active tasks</H3>
        <HeadingSmall>{tasks.length} tasks active</HeadingSmall>
      </div>
      {displayTasks()}
    </div>
  );
};

export default ActiveTasksContainer;
