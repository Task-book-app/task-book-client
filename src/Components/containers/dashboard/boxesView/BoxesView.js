import React from "react";
import { useFela } from "react-fela";
import { ModalProvider } from "../../../../context/ModalProvider";
import MainFeatures from "./MainFeatures";
import SecondaryFeatures from "./SecondaryFeatures";

const BoxesView = () => {
  const {
    css,
    theme: {
      breakpoints: { tablet, laptop_L },
    },
  } = useFela();
  const rules = () => ({
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",

    marginTop: "2rem",
    [tablet]: {
      flexDirection: "row",
    },
    [laptop_L]: {
      marginTop: "3rem",
    },
  });
  return (
    <div className={css(rules)}>
      <ModalProvider>
        <MainFeatures />
      </ModalProvider>
      <SecondaryFeatures />
    </div>
  );
};

export default BoxesView;
