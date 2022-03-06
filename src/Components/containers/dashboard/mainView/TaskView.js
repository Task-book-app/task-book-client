import React from "react";
import { useFela } from "react-fela";
import { Outlet } from "react-router-dom";
import { ModalProvider } from "../../../../context/ModalProvider";
import TopBar from "./TopBar";

const TaskView = () => {
  const { css } = useFela();

  const rules = () => ({
    padding: "2rem 7rem",
    flex: "1 1 auto",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  });
  return (
    <div className={css(rules)}>
      <ModalProvider>
        <TopBar />
      </ModalProvider>
      <Outlet />
    </div>
  );
};

export default TaskView;
