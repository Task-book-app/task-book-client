import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import Success from "../../../presentational/Success";

const TaskSuccess = () => {
  const { currentTheme, tasks } = useContext(appContext);
  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    display: "flex",
    flexDirection: "column",

    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },

    "& .container": {
      display: "flex",
      justifyContent: "space-between",
    },
  });

  const data = [
    { status: "Created", quantity: tasks.length },
    {
      status: "Active",
      quantity: tasks.filter((item) => item.completed === false).length,
    },
    {
      status: "Completed",
      quantity: tasks.filter((item) => item.completed === true).length,
    },
  ];

  return (
    <div className={css(rules)}>
      <div className="container">
        {data.map((item) => (
          <Success
            key={item.status}
            status={item.status}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskSuccess;
