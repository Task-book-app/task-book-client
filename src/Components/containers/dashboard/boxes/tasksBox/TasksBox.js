import React, { useContext, useState, useEffect } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";
import { useParams } from "react-router-dom";
import H3 from "../../../../presentational/typography/H3";
import HeadingSmall from "../../../../presentational/typography/HeadingSmall";
import Task from "./Task";

const TasksBox = () => {
  let { category } = useParams();
  const { tasks, currentTheme } = useContext(appContext);
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
    const active = tasksToDisplay(tasks).filter(
      (item) => item.completed === false
    );

    const completed = tasksToDisplay(tasks).filter(
      (item) => item.completed === true
    );
    setActiveTask(active);
    setCompletedTask(completed);
    return;
  };

  useEffect(() => {
    divideByStatus();
    return;
    // eslint-disable-next-line
  }, [category, tasks]);

  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),

    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },

    "& .headings": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

  const displayActiveTasks = () =>
    activeTask.map((item) => (
      <Task
        key={item.id}
        id={item.id}
        checked={item.completed}
        task={item.task}
      />
    ));

  const displayCompletedTasks = () =>
    completedTask.map((item) => (
      <Task
        key={item.id}
        id={item.id}
        checked={item.completed}
        task={item.task}
      />
    ));

  return (
    <div className={css(rules)}>
      <div className="container">
        <div className="headings">
          <H3 color={theme.colors.blue}>Active tasks</H3>
          {activeTask.length === 0 && (
            <HeadingSmall>{activeTask.length} tasks active</HeadingSmall>
          )}
        </div>
        <div className="tasks">{displayActiveTasks()}</div>
      </div>
      <div className="container">
        <div className="headings">
          <H3 color={theme.colors.blue}>Completed tasks</H3>
          {completedTask.length === 0 && (
            <HeadingSmall>{completedTask.length} tasks completed</HeadingSmall>
          )}
        </div>
        <div className="tasks">{displayCompletedTasks()}</div>
      </div>
    </div>
  );
};

export default TasksBox;
