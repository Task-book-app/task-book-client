import React, { useContext } from "react";
import { useFela } from "react-fela";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { appContext } from "../../../../context/GlobalContext";
import H3 from "../../../presentational/typography/H3";

const ProgressChart = () => {
  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela();
  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    minHeight: "17rem",
    display: "flex",
    flexDirection: "column",
    // flex: "1 1 100%",
  });
  const data = [
    { name: "Monday", abbr: "Mon", cw: 1, lw: 1, amt: 15 },
    { name: "Tuesday", abbr: "Tue", cw: 3, lw: 3, amt: 15 },
    { name: "Wednesday", abbr: "Wed", cw: 5, lw: 5, amt: 15 },
    { name: "Thursday", abbr: "Thu", cw: 6, lw: 7, amt: 15 },
    { name: "Friday", abbr: "Fri", cw: 8, lw: 9, amt: 15 },
    { name: "Saturday", abbr: "Sat", cw: 10, lw: 11, amt: 15 },
    { name: "Sunday", abbr: "Sun", cw: 12, lw: 12, amt: 15 },
  ];

  // const renderLineChart = (
  //   <LineChart width={400} height={400} data={data}>
  //     <Line type="monotone" dataKey="uv" stroke="#ffffff" />
  //   </LineChart>
  // );
  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Progress chart</H3>
      <ResponsiveContainer width="100%" height={171}>
        <LineChart data={data} margin={{ top: 25, left: -30, right: 15 }}>
          {/* <Legend verticalAlign="top" height={36} /> */}
          <Line
            name="current week"
            type="monotone"
            dataKey="cw"
            stroke="#8884d8"
          />
          <Line
            name="last week"
            type="monotone"
            dataKey="lw"
            stroke="#82ca9d"
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis type="number" tickCount={4} dataKey="amt" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
