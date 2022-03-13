import React, { useContext, useState, useEffect } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import Clock from "../../../presentational/Clock";
import DateToday from "../../../presentational/DateToday";
import H3 from "../../../presentational/typography/H3";
import HeadingSmall from "../../../presentational/typography/HeadingSmall";

const TimeAndDate = () => {
  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela();
  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    display: "flex",
    flexDirection: "column",
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },
    "& .container": {
      display: "flex",
      justifyContent: "space-between",
      "&__child": {
        // flex: "1 1 auto",

        "& > :not(:last-child)": {
          marginBottom: ".5rem",
        },
      },
    },
  });

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  });

  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Time and date</H3>
      <div className="container">
        <div className="container__child">
          <HeadingSmall>Local Time</HeadingSmall>
          <Clock time={time} setTime={setTime} />
        </div>
        <div className="container__child">
          <HeadingSmall>Today</HeadingSmall>
          <DateToday time={time} setTime={setTime} />
        </div>
      </div>
    </div>
  );
};

export default TimeAndDate;