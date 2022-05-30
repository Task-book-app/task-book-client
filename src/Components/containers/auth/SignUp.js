import React, { useState, useContext } from "react";
import FormControl from "../../presentational/FormControl";
import H1 from "../../presentational/typography/H1";
import Icon from "../../presentational/Icon";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../presentational/Button";
import { useFela } from "react-fela";
import { gql, useMutation } from "@apollo/client";
import { appContext } from "../../../context/GlobalContext";

const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

const SignUp = () => {
  const { setAlertMessage } = useContext(appContext);
  const { theme } = useFela();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [registerMutation, { loading, error, reset }] =
    useMutation(REGISTER_USER);

  const getUserData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitDataUser = async (e) => {
    e.preventDefault();
    try {
      await registerMutation({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
      if (error) {
        reset();
        throw new Error(error.message);
      }
      setFormData({
        email: "",
        password: "",
      });
      return;
    } catch (error) {
      setAlertMessage({ error });
    }
  };

  // if (loading) return <div>Submiting...</div>;
  // console.log(error);
  // if (error && error.message) {
  //   setAlertMessage({ error });
  //   reset();
  // }

  return (
    <>
      {/* {error &&
        error.graphQLErrors.map(({ message, statusCode }, i) => (
          <span key={i}>
            Submission error!
            <br /> {message} <br />
            Status: {statusCode};
          </span>
        ))} */}

      <form className="form" onSubmit={submitDataUser}>
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
              value={formData.email}
              onChange={getUserData}
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
              value={formData.password}
              onChange={getUserData}
              placeholder="Enter your password"
            />
          </div>
        </FormControl>
        {loading ? "loading..." : ""}
        <FormControl mt={8}>
          <Button type="submit" fontFamily="Semi-bold">
            Sign Up
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default SignUp;
