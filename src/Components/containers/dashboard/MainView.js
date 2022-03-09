import React from "react";
import { useFela } from "react-fela";
import { ModalProvider } from "../../../context/ModalProvider";
import BoxesView from "./boxesView/BoxesView";
import TopBar from "./topbar/TopBar";

const MainView = () => {
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
      <BoxesView />
    </div>
  );
};

export default MainView;
