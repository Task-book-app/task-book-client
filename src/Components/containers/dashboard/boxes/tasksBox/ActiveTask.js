import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";
import CheckBox from "../../../../presentational/CheckBox";
import EditIcon from "../../../../presentational/icons/EditIcon";
import TrashIcon from "../../../../presentational/icons/TrashIcon";

const rules = ({ currentTheme }) => ({
  overflow: "hidden",
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
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ":hover .box__1": {
    transform: "translateX(0)",
  },
  ":hover .box__2": {
    transform: "translateX(0)",
  },
  "& .box": {
    "&__1": {
      display: "flex",
      transform: "translateX(-3.3rem)",
      transition: "all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",

      "& > :not(:last-child)": {
        marginRight: "1.5rem",
      },
    },
    "&__2": {
      display: "flex",
      transform: "translateX(6rem)",
      transition: "all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",

      "& > :not(:last-child)": {
        marginRight: "1rem",
      },
    },
  },
});
const ActiveTask = ({ task }) => {
  const { currentTheme } = useContext(appContext);

  const { css } = useFela({ currentTheme });

  return (
    <div className={css(rules)}>
      <div className={"box box__1"}>
        <CheckBox fontSize={1.8} />
        <p>{task}</p>
      </div>

      <div className="box box__2">
        <EditIcon fontSize={1.8} />
        <TrashIcon fontSize={1.8} />
      </div>
    </div>
  );
};

export default ActiveTask;
