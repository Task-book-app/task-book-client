import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import Success from "../../../presentational/Success";
import H3 from "../../../presentational/typography/H3";

const TaskSuccess = () => {
  const { currentTheme } = useContext(appContext);
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
    { status: "Created", quantity: 113 },
    { status: "Completed", quantity: 97 },
    { status: "Removed", quantity: 14 },
  ];

  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Success for the week</H3>
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
