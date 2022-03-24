import React from "react";
import { useFela } from "react-fela";
import H3 from "../../../../presentational/typography/H3";
import CompletedTask from "./CompletedTask";
import HeadingSmall from "../../../../presentational/typography/HeadingSmall";

const CompletedTasksContainer = ({ tasks }) => {
  const { css, theme } = useFela();
  const rules = () => ({
    "& .headings": {
      display: "flex",
      justifyContent: "space-between",
    },
  });

  const displayTasks = () =>
    tasks.map((item) => (
      <CompletedTask
        key={item.id}
        id={item.id}
        checked={item.completed}
        task={item.task}
      />
    ));

  return (
    <div className={css(rules)}>
      <div className="headings">
        <H3 color={theme.colors.blue}>Completed tasks</H3>
        <HeadingSmall>{tasks.length} tasks completed</HeadingSmall>
      </div>
      {displayTasks()}
    </div>
  );
};

export default CompletedTasksContainer;
