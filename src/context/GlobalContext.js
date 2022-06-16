import { gql, useMutation, useQuery } from "@apollo/client";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAlert from "../Components/hooks/useAlert";
import useDarkMode from "../Components/hooks/useDarkMode";

export const appContext = createContext();

const GET_VERIFY_USER = gql`
  query VerifyLoggedUser {
    verifyUser {
      id
      username
      email
      picture
      userTasks {
        id
        task
        category
        completed
      }
    }
  }
`;

const LOG_OUT = gql`
  mutation LogOut {
    logout
  }
`;

export function GlobalContext({ children }) {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_VERIFY_USER);
  const [currentTheme, themeToggler] = useDarkMode();
  const [alertMessage, setAlertMessage, alertSettings] = useAlert();

  const [user, setUser] = useState();
  const [tasks, setTasks] = useState([]);

  const [logoutMutation] = useMutation(LOG_OUT, {
    onCompleted: (data) => {
      setUser();
      navigate("/");
      setTasks([]);
      console.log(data);
    },
    onError: (error) => console.error("Error logout", error),
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
      picture: data.verifyUser.picture,
    });

    setTasks(JSON.parse(JSON.stringify(data.verifyUser.userTasks)));
    return;
  }, [data, loading, error]);

  if (loading) return <h1>Loading...</h1>;

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
        logoutMutation,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
