import React from "react";
import { useFela } from "react-fela";
import { ModalProvider } from "../../../../context/ModalProvider";
import MainFeatures from "./MainFeatures";
import SecondaryFeatures from "./SecondaryFeatures";

const BoxesView = () => {
  const { css, theme } = useFela();
  const rules = () => ({
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    marginTop: "3rem",
    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },

    [theme.breakpoints.tablet]: {
      flexDirection: "row",
      "& > :not(:last-child)": {
        marginRight: "3rem",
      },
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
