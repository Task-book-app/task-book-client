import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import H3 from "../../../presentational/typography/H3";
import Chart from "../../../presentational/Chart";

const ProgressChart = () => {
  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    minHeight: "17rem",
    display: "flex",
    flexDirection: "column",
  });

  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Progress chart</H3>
      <Chart />
    </div>
  );
};

export default ProgressChart;
