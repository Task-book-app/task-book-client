import React from "react";
import { useFela } from "react-fela";
import { ModalProvider } from "../../../context/ModalProvider";
import Footer from "./boxes/Footer";
import BoxesView from "./boxesView/BoxesView";
import TopBar from "./topbar/TopBar";
import TopBarSmallScreen from "./topbar/TopBarSmallScreen";

const MainView = () => {
  const {
    css,
    theme: {
      breakpoints: { laptop_L },
    },
  } = useFela();

  const rules = () => ({
    width: "84%",
    padding: "2rem 2rem 0",
    flex: "1 1 auto",
    minHeight: "100%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",

    [laptop_L]: {
      padding: "2rem 7rem",
    },
  });

  return (
    <div className={css(rules)}>
      <ModalProvider>
        <TopBar />
      </ModalProvider>
      <ModalProvider>
        <TopBarSmallScreen />
      </ModalProvider>
      <BoxesView />
      <Footer />
    </div>
  );
};

export default MainView;
