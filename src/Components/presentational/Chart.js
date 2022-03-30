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
import { appContext } from "../../context/GlobalContext";

const Chart = () => {
  const { currentTheme } = useContext(appContext);
  const { theme } = useFela();

  const data = [
    { name: "Monday", abbr: "Mon", cw: 1, lw: 1, amt: 15 },
    { name: "Tuesday", abbr: "Tue", cw: 3, lw: 3, amt: 15 },
    { name: "Wednesday", abbr: "Wed", cw: 5, lw: 5, amt: 15 },
    { name: "Thursday", abbr: "Thu", cw: 6, lw: 7, amt: 15 },
    { name: "Friday", abbr: "Fri", cw: 8, lw: 9, amt: 15 },
    { name: "Saturday", abbr: "Sat", cw: 10, lw: 11, amt: 15 },
    { name: "Sunday", abbr: "Sun", cw: 12, lw: 12, amt: 15 },
  ];

  return (
    <ResponsiveContainer width="100%" height={171}>
      <LineChart data={data} margin={{ top: 25, left: -30, right: 20 }}>
        <Line
          name="current week"
          type="monotone"
          dataKey="cw"
          stroke="#8884d8"
        />
        <Line name="last week" type="monotone" dataKey="lw" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis type="number" tickCount={4} dataKey="amt" />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.darkModusBoxes(currentTheme).backgroundColor,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
