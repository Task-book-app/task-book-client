import React from "react";
import { useFela } from "react-fela";
import FactDay from "../boxes/FactDay";
import ProgressChart from "../boxes/ProgressChart";
import TimeAndDate from "../boxes/TimeAndDate";

const SecondaryFeatures = () => {
  const { css, theme } = useFela();
  const rules = () => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",

    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },

    [theme.breakpoints.tablet]: {
      width: "47%",
    },
  });

  return (
    <div className={css(rules)}>
      <TimeAndDate />
      <FactDay />
      <ProgressChart />
    </div>
  );
};

export default SecondaryFeatures;
