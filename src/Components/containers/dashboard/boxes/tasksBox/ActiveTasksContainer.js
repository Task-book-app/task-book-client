import React from "react";
import CheckBoxFalse from "../../../../presentational/icons/CheckBoxFalse";
import CheckBoxTrue from "../../../../presentational/icons/CheckBoxTrue";
import EditIcon from "../../../../presentational/icons/EditIcon";
import TrashIcon from "../../../../presentational/icons/TrashIcon";
import H3 from "../../../../presentational/typography/H3";
import { useFela } from "react-fela";

const ActiveTasksContainer = ({ tasks }) => {
  const { theme } = useFela();

  return (
    <div>
      <H3 color={theme.colors.blue}>Active tasks</H3>
      <TrashIcon />
      <EditIcon />
      <CheckBoxFalse />
      <CheckBoxTrue />
      {tasks.length === 0 ? "" : tasks[0].task}
    </div>
  );
};

export default ActiveTasksContainer;
