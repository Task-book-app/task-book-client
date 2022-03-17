import React, { useContext, useState, useEffect } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";
import { useParams } from "react-router-dom";
import { tempData } from "../../../../../helpers/tempData";
import ActiveTasksContainer from "./ActiveTasksContainer";
import CompletedTasksContainer from "./CompletedTasksContainer";

const TasksBox = () => {
  let { category } = useParams();

  const [activeTask, setActiveTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  if (!category) {
    category = "all";
  }

  const tasksToDisplay = (data) => {
    if (category === "all") {
      return data;
    }
    return data.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  };

  const divideByStatus = () => {
    const active = tasksToDisplay(tempData).filter(
      (item) => item.status.toLowerCase() === "active"
    );

    const completed = tasksToDisplay(tempData).filter(
      (item) => item.status.toLowerCase() === "completed"
    );
    setActiveTask(active);
    setCompletedTask(completed);
    return;
  };

  useEffect(() => {
    divideByStatus();
    return;
    // eslint-disable-next-line
  }, [category]);

  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    display: "flex",
    flexDirection: "column",
    // flex: "1 1 auto",
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },
  });
  return (
    <div className={css(rules)}>
      <ActiveTasksContainer tasks={activeTask} />
      <CompletedTasksContainer tasks={completedTask} />
    </div>
  );
};

export default TasksBox;
