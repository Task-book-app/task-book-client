import React, { useState, useEffect } from "react";
import { useFela } from "react-fela";

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState("none");
  const { renderer, css, theme } = useFela({ showAlert });

  const rules = () => ({
    display: showAlert,
    padding: "1rem 3rem",
    fontSize: "2rem",
    // border: "1px solid #ff0000",
    borderRadius: "0.8rem",
    backgroundColor: theme.colors.danger,
    position: "absolute",
    top: "10rem",
    left: "50%",

    transform: "translate(-50%, 0)",

    color: theme.colors.whiteText,
    zIndex: 20000,
  });

  // key-frames
  const fadeIn = renderer.renderKeyframe(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));

  const fadeOut = renderer.renderKeyframe(() => ({
    from: { opacity: 1 },
    to: { opacity: 0 },
  }));

  const fadeInRules = {
    WebkitAnimation:
      fadeIn + " 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    animation: fadeIn + " 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
  };

  const fadeOutRules = {
    WebkitAnimation: fadeOut + " 1s ease-out .8s both",
    animation: fadeOut + " 1s ease-out .8s both",
  };
  const [fadeAnimation, setFadeAnimation] = useState(fadeInRules);

  useEffect(() => {
    if (!message) {
      setShowAlert("none");
    } else {
      setShowAlert("block");
      setFadeAnimation(fadeInRules);
      setTimeout(() => {
        setFadeAnimation(fadeOutRules);
      }, 600);
    }
  }, [message]);

  return (
    <div className={css(rules, fadeAnimation)}>
      <p>{message}</p>{" "}
    </div>
  );
};

export default Alert;
