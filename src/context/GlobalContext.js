import { gql, useQuery } from "@apollo/client";
import React, { createContext, useState, useEffect } from "react";
import useAlert from "../Components/hooks/useAlert";
import useDarkMode from "../Components/hooks/useDarkMode";

export const appContext = createContext();

const GET_VERIFY_USER = gql`
  query VerifyLoggedUser {
    verifyUser {
      id
      username
      email
    }
  }
`;

export function GlobalContext({ children }) {
  const { loading, error, data } = useQuery(GET_VERIFY_USER);
  const [currentTheme, themeToggler] = useDarkMode();
  const [alertMessage, setAlertMessage, alertSettings] = useAlert();
  const [tasks, setTasks] = useState([]);

  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    picture: "",
  });

  useEffect(() => {
    if (loading) return;
    if (error) {
      console.error({ error });
      return;
    }
    setUser({
      id: data.verifyUser.id,
      username: data.verifyUser.username,
      email: data.verifyUser.email,
      picture: "",
    });
    return;
  }, [data, loading, error]);

  if (loading) return "Loading...";

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
