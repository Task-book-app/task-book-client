import React, { useState, useContext } from "react";
import FormControl from "../../presentational/FormControl";
import H1 from "../../presentational/typography/H1";
import H2 from "../../presentational/typography/H2";
import Icon from "../../presentational/Icon";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../presentational/Button";
import { useFela } from "react-fela";
import { gql, useMutation } from "@apollo/client";
import { appContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import ShowHidePassword from "../../presentational/ShowHidePassword";

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
  const { setAlertMessage, setUser } = useContext(appContext);
  const { theme } = useFela();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [registerMutation, { loading }] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      // console.log("Data from register", data);
      const { id, username, email } = data.register;
      setUser({
        id,
        username,
        email,
        picture: "",
      });
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

      registerMutation({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
      return;
    } catch (error) {
      setAlertMessage({ error });
    }
  };

  const handleShowPassword = (checked) => {
    setShowPassword(checked);
  };

  return (
    <>
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
              disabled={loading ? true : false}
            />
          </div>
        </FormControl>
        <FormControl mt={3}>
          <label htmlFor="password">Password</label>
          <div>
            <Icon color={theme.colors.blue} fontIcon={faLock} />
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              id="password"
              value={formData.password}
              onChange={getUserData}
              placeholder="Enter your password"
              disabled={loading ? true : false}
            />
          </div>
        </FormControl>

        <FormControl mt={1} ml={-1} display="flex">
          <ShowHidePassword
            callback={(checked) => handleShowPassword(checked)}
          />
        </FormControl>
        <FormControl mt={8}>
          {loading ? (
            <H2 textAlign="center">loading...</H2>
          ) : (
            <Button type="submit" fontFamily="Semi-bold" disabled={disable}>
              Create Account
            </Button>
          )}
        </FormControl>
      </form>
    </>
  );
};

export default SignUp;
