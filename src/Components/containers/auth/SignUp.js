// import React from 'react'
import Form from "./Form";
import FormControl from "../../presentational/FormControl";
import H1 from "../../presentational/typography/H1";
import Icon from "../../presentational/Icon";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../presentational/Button";
import { useFela } from "react-fela";

const SignUp = () => {
  const { theme } = useFela();

  return (
    <>
      <Form>
        <H1>Create</H1>
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
          <Button type="button" fontFamily="Semi-bold">
            Sign Up
          </Button>
        </FormControl>
      </Form>
    </>
  );
};

export default SignUp;
