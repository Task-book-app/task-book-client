import React from "react";
import { useFela } from "react-fela";
import MainFeatures from "./MainFeatures";
import SecondaryFeatures from "./SecondaryFeatures";

const rules = () => ({
  display: "flex",
  flex: "1 1 auto",
  marginTop: "3rem",
  "& > :not(:last-child)": {
    marginRight: "3rem",
  },
});
const BoxesView = () => {
  const { css } = useFela();
  return (
    <div className={css(rules)}>
      <MainFeatures />
      <SecondaryFeatures />
    </div>
  );
};

export default BoxesView;
