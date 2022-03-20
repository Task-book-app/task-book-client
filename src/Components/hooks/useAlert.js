import { useState } from "react";

const useAlert = () => {
  const [message, setMessage] = useState("");

  const setAlertMessage = (message) => {
    if (message.error) {
      setMessage(message.error.message);
      setTimeout(() => {
        setMessage("");
        return;
      }, 2000);
    }
  };

  return [message, setAlertMessage];
};

export default useAlert;
