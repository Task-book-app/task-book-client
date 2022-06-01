// import React from 'react'
import { useContext } from "react";
import FormControl from "../../presentational/FormControl";
import H1 from "../../presentational/typography/H1";
import Icon from "../../presentational/Icon";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../presentational/Button";
import { useFela } from "react-fela";
import { Navigate } from "react-router-dom";
import { appContext } from "../../../context/GlobalContext";

const Login = () => {
  const { user } = useContext(appContext);
  const { theme } = useFela();

  return (
    <>
      {user.email && <Navigate replace to="/dashboard" />}

      <form className="form">
        <H1>Sign Into</H1>
        <H1>Your Account</H1>
        <FormControl mt={5}>
          <label htmlFor="email">E-mail</label>
          <div>
            <Icon color={theme.colors.blue} fontIcon={faAt} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
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
              placeholder="Enter your password"
            />
          </div>
        </FormControl>
        <FormControl mt={8}>
          <Button fontFamily="Semi-bold">Log In</Button>
        </FormControl>
      </form>
    </>
  );
};

export default Login;
