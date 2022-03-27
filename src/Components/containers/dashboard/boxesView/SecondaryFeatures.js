import React from "react";
import { useFela } from "react-fela";
import FactDay from "../boxes/FactDay";
import ProgressChart from "../boxes/ProgressChart";
// import TaskSuccess from "../boxes/TaskSuccess";
// import Statements from "../boxes/Statements";
import TimeAndDate from "../boxes/TimeAndDate";

const rules = () => ({
  width: "47%",
  display: "flex",
  flexDirection: "column",

  "& > :not(:last-child)": {
    marginBottom: "3rem",
  },
});

const SecondaryFeatures = () => {
  const { css } = useFela();

  return (
    <div className={css(rules)}>
      {/* <TaskSuccess /> */}
      <TimeAndDate />
      {/* <Statements /> */}
      <FactDay />
      <ProgressChart />
    </div>
  );
};

export default SecondaryFeatures;
