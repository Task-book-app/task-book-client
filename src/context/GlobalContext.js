import { gql, useMutation, useApolloClient } from "@apollo/client";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAlert from "../Components/hooks/useAlert";
import useDarkMode from "../Components/hooks/useDarkMode";

export const appContext = createContext();

const GET_VERIFY_USER = gql`
  mutation VerifyLoggedUser {
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
  const client = useApolloClient();
  const [currentTheme, themeToggler] = useDarkMode();
  const [alertMessage, setAlertMessage, alertSettings] = useAlert();

  const [user, setUser] = useState();
  const [tasks, setTasks] = useState([]);

  const [verifyLoggedUser, { loading }] = useMutation(GET_VERIFY_USER, {
    onCompleted: (data) => {
      const { id, username, email, picture, userTasks } = data.verifyUser;
      setUser({
        id: id,
        username: username,
        email: email,
        picture: picture,
      });

      setTasks(userTasks);
    },
    onError: (error) => {
      console.error({ error });
    },
  });

  const [logoutMutation] = useMutation(LOG_OUT, {
    onCompleted: (data) => {
      setUser();
      setTasks([]);
      // client.cache.evict({ id: "TaskType" });
      client.cache.evict({ id: "ROOT_MUTATION" });
      client.cache.gc();
      navigate("/");
      console.log(data);
    },
    onError: (error) => console.error("Error logout", error),
  });

  useEffect(() => {
    verifyLoggedUser();
    // eslint-disable-next-line
  }, []);
  console.log(tasks);
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
