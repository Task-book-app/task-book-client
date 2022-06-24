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
  const { currentTheme, tasks } = useContext(appContext);
  const { theme } = useFela();

  const numOfTasks = (taskDB) => {
    const categories = ["home", "family", "work", "sports"];
    const categoriesInDB = [];
    let objOfOcurrencies = {};
    taskDB.forEach((task) => {
      categoriesInDB.push(task.category);
    });

    categories.forEach((category) => {
      objOfOcurrencies[category] = 0;
    });

    for (let element of categoriesInDB) {
      if (objOfOcurrencies[element]) {
        objOfOcurrencies[element] += 1;
      } else {
        objOfOcurrencies[element] = 1;
      }
    }
    return objOfOcurrencies;
  };

  const numToChart = numOfTasks(tasks);

  const data = [
    { name: "Home", quantity: numToChart.home, amt: 15 },
    { name: "Family", quantity: numToChart.family, amt: 15 },
    { name: "Work", quantity: numToChart.work, amt: 15 },
    { name: "Sports", quantity: numToChart.sports, amt: 15 },
  ];

  return (
    <ResponsiveContainer width="100%" height={171}>
      <LineChart data={data} margin={{ top: 25, left: -30, right: 20 }}>
        <Line
          name="created"
          type="monotone"
          dataKey="quantity"
          stroke="#8884d8"
        />
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
