import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";
import CheckBox from "../../../../presentational/CheckBox";

const rules = ({ currentTheme }) => ({
  padding: "1.5rem",
  fontSize: "1.4rem",
  lineHeight: "1.9rem",
  letterSpacing: "0.02em",
  overflow: "hidden",
  transition: "all",

  border:
    currentTheme === "light"
      ? "1px solid rgba(40, 40, 70, 0.1)"
      : "1px solid rgba(249, 249, 249, 0.2)",
  borderRadius: "1rem",
  textDecorationLine: "line-through",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  ":hover .box": {
    transform: "translateX(0)",
  },

  "& .box": {
    display: "flex",
    transform: "translateX(-3.3rem)",
    transition: "all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",

    "& > :not(:last-child)": {
      marginRight: "1.5rem",
    },
  },
});

const CompletedTask = ({ task, checked, id }) => {
  const { currentTheme } = useContext(appContext);
  const { css } = useFela({ currentTheme });

  return (
    <div className={css(rules)}>
      <div className="box">
        <CheckBox fontSize={1.8} checked={checked} id={id} />
        <p>{task}</p>
      </div>
    </div>
  );
};

export default CompletedTask;
