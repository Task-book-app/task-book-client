import React from "react";
import { useFela } from "react-fela";
import { ModalProvider } from "../../../context/ModalProvider";
import Footer from "../footer/Footer";
import BoxesView from "./boxesView/BoxesView";
import TopBar from "./topbar/TopBar";
import TopBarSmallScreen from "./topbar/TopBarSmallScreen";
import useMediaQuery from "../../hooks/useMediaQuery";

const MainView = ({ currentTheme }) => {
  const {
    css,
    theme: {
      breakpoints: { tablet, laptop, laptop_L },
      getMediaQuery,
      scrollBarStyles,
    },
  } = useFela();

  const laptopScreenListener = useMediaQuery(getMediaQuery(laptop));

  const rules = () => ({
    width: "100%",
    padding: "1rem 1rem",
    flex: "1 1 auto",
    minHeight: "100%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    ...scrollBarStyles(currentTheme),
    [`${tablet} and (max-width: 90em)`]: {
      padding: "2rem 2rem 0",
    },
    [laptop]: {
      width: "84%",
    },
    [laptop_L]: {
      padding: "2rem 7rem",
    },
  });

  return (
    <div className={css(rules)}>
      {laptopScreenListener ? (
        <ModalProvider>
          <TopBar />
        </ModalProvider>
      ) : (
        <ModalProvider>
          <TopBarSmallScreen />
        </ModalProvider>
      )}
      <BoxesView />
      <Footer modus={currentTheme} />
    </div>
  );
};

export default MainView;
