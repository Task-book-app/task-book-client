import React, { useState, useContext } from "react";
import FormControl from "../../presentational/FormControl";
import H1 from "../../presentational/typography/H1";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../presentational/Button";
import { useFela } from "react-fela";
import { gql, useMutation } from "@apollo/client";
import { appContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import ShowHidePassword from "../../presentational/ShowHidePassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons/faCircleNotch";

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
  const {
    theme: {
      colors: { blue },
    },
  } = useFela();
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
        <H1 fontSize={3.5} lineHeight={5} textAlign="center">
          <span style={{ color: blue }}>Create</span>
          <br /> Your Account
        </H1>
        <FormControl mt={4}>
          <label htmlFor="email">E-mail</label>
          <div>
            <FontAwesomeIcon
              color={blue}
              icon={faAt}
              fontSize="2rem"
              fixedWidth
              pull="left"
            />
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
          <label htmlFor="password">Password</label>{" "}
          <div>
            <FontAwesomeIcon
              color={blue}
              icon={faLock}
              fontSize="2rem"
              fixedWidth
              pull="left"
            />
            <input
              id="password"
              name="password"
              type={!showPassword ? "password" : "text"}
              value={formData.password}
              onChange={getUserData}
              placeholder="Enter your password"
              disabled={loading ? true : false}
            />
          </div>
        </FormControl>

        <FormControl mt={1} ml={-0.5} display="flex">
          <ShowHidePassword
            callback={(checked) => handleShowPassword(checked)}
          />
        </FormControl>
        <FormControl mt={5}>
          <Button
            fontSize={2}
            height={5}
            type="submit"
            fontFamily="Semi-bold"
            disabled={disable}
          >
            {loading ? (
              <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fa-1x" />
            ) : (
              "Create Account"
            )}
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default SignUp;
