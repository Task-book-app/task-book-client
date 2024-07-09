import React from "react";
import Button from "./Button";

const ButtonSmall = ({ children, event }) => {
  return (
    <Button
      event={event}
      bg={"danger"}
      fontSize={1.6}
      extend={{
        padding: "0.2rem 1rem",
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonSmall;
