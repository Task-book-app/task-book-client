import React from "react";
import { useFela } from "react-fela";
// import H1 from "../../presentational/typography/H1";
import { Outlet } from "react-router-dom";

const TaskView = () => {
  const { css, theme } = useFela();

  const rules = () => ({
    // width: '84%',
    flex: "1 1 auto",
    backgroundColor: "currentColor",
    minHeight: "100%",
    ...theme.centerFlex,
  });
  return (
    <div className={css(rules)}>
      <Outlet />
    </div>
  );
};

export default TaskView;
