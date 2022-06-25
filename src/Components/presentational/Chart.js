import React, { useContext } from "react";
import { useFela } from "react-fela";
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { appContext } from "../../context/GlobalContext";
import {
  faHome,
  faUserGroup,
  faSuitcase,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chart = () => {
  const { tasks, currentTheme } = useContext(appContext);
  const { theme } = useFela();

  const numOfTasks = (taskDB) => {
    const categories = ["home", "family", "work", "sports"];

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
      name: "Home",
      quantity: numToChart.home,
      uv: numToChart.home,
      pv: 15,
      amt: 15,
    },
    {
      name: "Family",
      quantity: numToChart.family,
      uv: numToChart.family,
      pv: 15,
      amt: 15,
    },
    {
      name: "Work",
      quantity: numToChart.work,
      uv: numToChart.work,
      pv: 15,
      amt: 15,
    },
    {
      name: "Sports",
      quantity: numToChart.sports,
      uv: numToChart.sports,
      pv: 15,
      amt: 15,
    },
  ];

  const renderCustomAxisTick = ({ x, y, payload }) => {
    let path = "";
    switch (payload.value.toLowerCase()) {
      case "home":
        path = faHome;
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
        // fontSize="1.5rem"
        x={x - 7.5}
        y={y + 4}
        fill="inherit"
        width={15}
        height={15}
      />
    );
  };

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill={currentTheme === "light" ? "#222831" : "#fafafa"}
        textAnchor="middle"
        dy={-6}
      >{`Tasks: ${value}`}</text>
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={171}>
        <BarChart margin={{ top: 30, left: -30, right: 20 }} data={data}>
          <XAxis dataKey="name" tick={renderCustomAxisTick} />
          <YAxis />
          <Bar
            dataKey="uv"
            barSize={30}
            fill={theme.colors.blue}
            label={renderCustomBarLabel}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
