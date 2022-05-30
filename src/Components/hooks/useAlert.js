import { useState } from "react";
import { useFela } from "react-fela";

const useAlert = () => {
  const { renderer } = useFela();
  const [message, setMessage] = useState("");

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
      fadeIn + " 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    animation: fadeIn + " 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
  };

  const fadeOutRules = {
    WebkitAnimation: fadeOut + " 1s ease-out both",
    animation: fadeOut + " 1s ease-out both",
  };

  const [alertSettings, setAlertSettings] = useState({
    showAlert: "none",
    fadeAnimation: fadeInRules,
  });

  const setAlertMessage = (message) => {
    console.log(message);
    if (message.error) {
      setMessage(message.error.message);
      setAlertSettings({
        showAlert: "block",
        fadeAnimation: fadeInRules,
      });

      setTimeout(() => {
        setAlertSettings({
          showAlert: "block",
          fadeAnimation: fadeOutRules,
        });
        setTimeout(() => {
          setMessage("");
          setAlertSettings({
            showAlert: "none",
            fadeAnimation: fadeInRules,
          });
        }, 1000);
      }, 1500);
    }
  };

  return [message, setAlertMessage, alertSettings];
};

export default useAlert;
