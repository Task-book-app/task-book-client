import React from "react";
import { useFela } from "react-fela";

const Success = ({ status = "Created", quantity = 113 }) => {
  const { css, theme } = useFela();
  const rules = () => ({
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& > :not(:last-child)": {
      marginBottom: "1rem",
    },

    "& .status": {
      fontSize: "1.7rem",
      lineHeight: "1.6rem",
      letterSpacing: "0.02em",
    },

    "& .quantity": {
      width: "10rem",
      height: "10rem",
      border: "1px solid " + theme.colors.blue,
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "&__number": {
        textAlign: "center",
        fontSize: "3.7rem",
        lineHeight: "4.9rem",
        letterSpacing: "0.02em",
        color: theme.colors.blue,
      },
    },
  });
  return (
    <div className={css(rules)}>
      <span className="status">{status}</span>
      <div className="quantity">
        <p className="quantity__number">{quantity}</p>
        <span className="status">tasks</span>
      </div>
    </div>
  );
};

export default Success;
