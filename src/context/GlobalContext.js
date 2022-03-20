import React, { createContext, useState } from "react";
import useAlert from "../Components/hooks/useAlert";
import useDarkMode from "../Components/hooks/useDarkMode";

export const appContext = createContext();

export function GlobalContext({ children }) {
  const [currentTheme, themeToggler] = useDarkMode();
  const [alertMessage, setAlertMessage] = useAlert();

  const [tasks, setTasks] = useState([]);

  return (
    <appContext.Provider
      value={{
        tasks,
        setTasks,
        alertMessage,
        setAlertMessage,
        currentTheme,
        themeToggler,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
