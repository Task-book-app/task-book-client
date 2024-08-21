import React from "react";
import { useFela } from "react-fela";

const Alert = ({ message, alertSettings }) => {
  const {
    css,
    theme: {
      colors: { danger, whiteText },
    },
  } = useFela();

  const rules = () => ({
    display: alertSettings.showAlert,
    padding: "1rem 3rem",
    fontSize: "2rem",
    borderRadius: "0.8rem",
    backgroundColor: danger,
    position: "absolute",
    top: "10rem",
    left: "50%",

    transform: "translate(-50%, 0)",

    color: whiteText,
    zIndex: 200000,
  });

  return (
    <div className={css(rules, alertSettings.fadeAnimation)}>
      <p>{message}</p>{" "}
    </div>
  );
};

export default Alert;
