import React, { createContext, useState } from "react";
import useAlert from "../Components/hooks/useAlert";
import useDarkMode from "../Components/hooks/useDarkMode";

export const appContext = createContext();

export function GlobalContext({ children }) {
  const [currentTheme, themeToggler] = useDarkMode();
  const [alertMessage, setAlertMessage, alertSettings] = useAlert();
  const [tasks, setTasks] = useState([
    {
      category: "home",
      completed: false,
      date: "2022-03-22",
      id: "035daaae-7f64-4a2b-a24f-7086b71d8775",
      priority: "very important!",
      task: "Clean Kitchen",
    },
    {
      category: "sports",
      completed: false,
      date: "2022-03-22",
      id: "035daaae-7f64-4a2b-a24f-7086b71d8743",
      priority: "very important!",
      task: "Go to the GIM",
    },
    {
      category: "family",
      completed: false,
      date: "2022-03-22",
      id: "035daaae-7f64-4a2b-a24f-7086b71d8709",
      priority: "very important!",
      task: "Take child to school",
    },
    {
      category: "work",
      completed: false,
      date: "2022-03-22",
      id: "035daaae-7f64-4a2b-a24f-7086b71d8543",
      priority: "very important!",
      task: "Finish front end",
    },
  ]);
  const [user, setUser] = useState({
    username: "username",
    email: "email@address.com",
    picture: "",
  });

  return (
    <appContext.Provider
      value={{
        tasks,
        setTasks,
        alertMessage,
        setAlertMessage,
        alertSettings,
        currentTheme,
        themeToggler,
        user,
        setUser,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
