import React, { createContext, useState, useEffect } from "react";
import useAlert from "../Components/hooks/useAlert";
import useDarkMode from "../Components/hooks/useDarkMode";
// import { getUser } from "../helpers/api";

export const appContext = createContext();

export function GlobalContext({ children }) {
  const [currentTheme, themeToggler] = useDarkMode();
  const [alertMessage, setAlertMessage, alertSettings] = useAlert();
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({
    username: "username",
    email: "email@address.com",
    picture: "",
  });

  // useEffect(() => {
  //   getUser();
  // }, []);

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
