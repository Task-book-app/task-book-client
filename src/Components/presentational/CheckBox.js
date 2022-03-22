import React, { useState, useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";
import CheckBoxFalse from "./icons/CheckBoxFalse";
import CheckBoxTrue from "./icons/CheckBoxTrue";

const rules = () => ({
  cursor: "pointer",
  display: "flex",
  '& input[type="checkbox"]': {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
});

const CheckBox = ({ fontSize, checked, id }) => {
  const { tasks, setTasks } = useContext(appContext);
  const { css } = useFela();
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (e) => {
    setIsChecked(!isChecked);
    const updateTask = tasks.find((item) => item.id === e.target.id);
    updateTask.completed = e.target.checked;
    const updatedDB = tasks.map((item) =>
      item.id === updateTask.id ? updateTask : item
    );
    setTimeout(() => {
      setTasks(updatedDB);
    }, 500);
  };

  return (
    <label className={css(rules)}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
        id={id}
      />
      {isChecked ? (
        <CheckBoxTrue fontSize={fontSize} />
      ) : (
        <CheckBoxFalse fontSize={fontSize} />
      )}
    </label>
  );
};

export default CheckBox;
