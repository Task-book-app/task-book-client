import React from "react";
import { useFela } from "react-fela";
import H3 from "../../../../presentational/typography/H3";

const CompletedTasks = ({ tasks }) => {
  const { theme } = useFela();
  return (
    <div>
      <H3 color={theme.colors.blue}>Completed tasks</H3>

      {tasks.length === 0 ? "" : tasks[0].task}
    </div>
  );
};

export default CompletedTasks;
