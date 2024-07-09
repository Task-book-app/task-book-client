import React, { useContext } from "react";
import { useFela } from "react-fela";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { appContext } from "../../context/GlobalContext";
import {
  faBroom,
  faUserGroup,
  faSuitcase,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chart = () => {
  const { tasks, currentTheme } = useContext(appContext);
  const { theme } = useFela();

  const numOfTasks = (taskDB) => {
    const categories = ["housework", "family", "work", "sports"];

    const categoriesInDB = taskDB.map((item) => {
      return item.category;
    });

    const objOfOcurrencies = categories.reduce((obj, acc) => {
      obj[acc] = 0;
      return obj;
    }, {});

    for (let item of categoriesInDB) {
      objOfOcurrencies[item]
        ? (objOfOcurrencies[item] += 1)
        : (objOfOcurrencies[item] = 1);
    }
    return objOfOcurrencies;
  };

  const numToChart = numOfTasks(tasks);

  const data = [
    {
      name: "Housework",
      tasks: numToChart.housework,
      amt: 15,
    },
    {
      name: "Family",
      tasks: numToChart.family,
      amt: 15,
    },
    {
      name: "Work",
      quantity: numToChart.work,
      tasks: numToChart.work,
      amt: 15,
    },
    {
      name: "Sports",
      quantity: numToChart.sports,
      tasks: numToChart.sports,
      amt: 15,
    },
  ];

  const renderCustomAxisTick = ({ x, y, payload }) => {
    let path = "";
    switch (payload.value.toLowerCase()) {
      case "housework":
        path = faBroom;
        break;
      case "family":
        path = faUserGroup;
        break;
      case "work":
        path = faSuitcase;
        break;
      case "sports":
        path = faPersonRunning;
        break;
      default:
        path = "";
    }

    return (
      <FontAwesomeIcon
        icon={path}
        x={x - 7.5}
        y={y + 4}
        fill="inherit"
        width={20}
        height={20}
      />
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={171}>
        <BarChart margin={{ top: 30, left: -30, right: 20 }} data={data}>
          <XAxis dataKey="name" tick={renderCustomAxisTick} />
          <YAxis
            domain={[0, 10]}
            ticks={[0, 2, 4, 6, 8, 10]}
            allowDecimals={false}
          />
          <Tooltip
            wrapperStyle={{
              borderRadius: "0.8rem",
            }}
            contentStyle={{
              ...theme.darkModusBoxes(currentTheme),
              border: `1px solid ${theme.colors.blue}`,

              borderRadius: "0.8rem",
              color: theme.colors.blue,
              fontSize: "1.8rem",
            }}
            itemStyle={{
              color: currentTheme === "light" ? "#222831" : "#fafafa",
              fontSize: "1.8rem",
            }}
            cursor={false}
          />

          <Bar dataKey="tasks" barSize={30} fill={theme.colors.blue} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
