// import React from 'react'
import { useContext, useState } from "react";
import FormControl from "../../presentational/FormControl";
import H1 from "../../presentational/typography/H1";
import H2 from "../../presentational/typography/H2";
import Icon from "../../presentational/Icon";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../presentational/Button";
import { useFela } from "react-fela";
import { Navigate, useNavigate } from "react-router-dom";
import { appContext } from "../../../context/GlobalContext";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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

const Login = () => {
  const { user, setUser, setAlertMessage, setTasks } = useContext(appContext);
  const { theme } = useFela();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loginMutation, { loading }] = useMutation(LOGIN_USER, {
    variables: {
      email: formData.email,
      password: formData.password,
    },
    onCompleted: (data) => {
      const { id, username, email, picture, userTasks } = data.login;
      setUser({
        id,
        username,
        email,
        picture,
      });
      setTasks(userTasks);
      setFormData({
        email: "",
        password: "",
      });
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Error register", error);
      setAlertMessage({ error });
    },
  });

  const [disable, setDisable] = useState(false);

  const disableForm = () => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 2500);
  };

  const getUserData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitDataUser = (e) => {
    e.preventDefault();
    try {
      if (!formData.email || !formData.password) {
        disableForm();
        throw new Error("Email and password must be provided");
      }

      loginMutation();
      return;
    } catch (error) {
      setAlertMessage({ error });
    }
  };

  return (
    <>
      {user && <Navigate replace to="/dashboard" />}

      <form onSubmit={submitDataUser} className="form">
        <H1>Log In</H1>
        <H1>Your Account</H1>
        <FormControl mt={5}>
          <label htmlFor="email">E-mail</label>
          <div>
            <Icon color={theme.colors.blue} fontIcon={faAt} />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={getUserData}
              placeholder="name@example.com"
              disabled={loading ? true : false}
            />
          </div>
        </FormControl>
        <FormControl mt={3}>
          <label htmlFor="password">Password</label>
          <div>
            <Icon color={theme.colors.blue} fontIcon={faLock} />
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={getUserData}
              placeholder="Enter your password"
              disabled={loading ? true : false}
            />
          </div>
        </FormControl>
        <FormControl mt={8}>
          {loading ? (
            <H2 textAlign="center">loading...</H2>
          ) : (
            <Button type="submit" fontFamily="Semi-bold" disabled={disable}>
              Log In
            </Button>
          )}
        </FormControl>
      </form>
    </>
  );
};

export default Login;
