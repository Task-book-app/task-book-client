import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";

const CompletedTask = ({ task }) => {
  const { currentTheme } = useContext(appContext);
  const { css } = useFela();

  const rules = () => ({
    padding: "1.5rem",
    fontSize: "1.4rem",
    lineHeight: "1.9rem",
    letterSpacing: "0.02em",

    border:
      currentTheme === "light"
        ? "1px solid rgba(40, 40, 70, 0.1)"
        : "1px solid rgba(249, 249, 249, 0.2)",
    borderRadius: "1rem",
    cursor: "pointer",
  });

  return (
    <div className={css(rules)}>
      <p>{task}</p>
    </div>
  );
};

export default CompletedTask;
