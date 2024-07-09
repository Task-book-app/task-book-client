import React from "react";
import { useFela } from "react-fela";
import FactDay from "../boxes/FactDay";
import ProgressChart from "../boxes/ProgressChart";
import TimeAndDate from "../boxes/TimeAndDate";

const SecondaryFeatures = () => {
  const {
    css,
    theme: {
      breakpoints: { tablet, laptop_L },
    },
  } = useFela();
  const rules = () => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",

    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },

    [tablet]: {
      width: "47%",
    },

    [laptop_L]: {
      "& > :not(:last-child)": {
        marginBottom: "3rem",
      },
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
