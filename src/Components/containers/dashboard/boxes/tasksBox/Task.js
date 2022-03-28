import React, { useContext, useState, useRef, useEffect } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";
import ButtonIcon from "../../../../presentational/ButtonIcon";
import ButtonSmall from "../../../../presentational/ButtonSmall";
import CheckBox from "../../../../presentational/CheckBox";
import EditIcon from "../../../../presentational/icons/EditIcon";
import TrashIcon from "../../../../presentational/icons/TrashIcon";

const rules = ({ currentTheme, itemHeight, transitionClass, checked }) => ({
  height: 0,
  fontSize: "1.4rem",
  lineHeight: "1.9rem",
  letterSpacing: "0.02em",
  transition: "height 0.6s ease-out, margin-top 0.6s",

  position: "relative",

  "&.show": {
    height: `${itemHeight}px`,
    marginTop: "1rem",
  },

  "& .list-item": {
    textDecorationLine: checked ? "line-through" : "none",
    border:
      currentTheme === "light"
        ? "1px solid rgba(40, 40, 70, 0.1)"
        : "1px solid rgba(249, 249, 249, 0.2)",
    borderRadius: "1rem",
    position: "absolute",
    overflow: "hidden",
    top: 0,
    left: 0,
    padding: "1.5rem",
    opacity: 0,

    transition: transitionClass,
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  "& .list-item.show": {
    opacity: 1,
  },

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
      alignItems: "center",
      transform: "translateX(6rem)",
      transition: "all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",

      "& > :not(:last-child)": {
        marginRight: "1rem",
      },
    },
  },

  "& .input-update": {
    backgroundColor: "transparent",
    color: "inherit",
    border: "none",
    outline: "none",
    fontStyle: "italic",
    letterSpacing: "0.03em",
  },
});

const Task = ({ task, checked, id }) => {
  const { currentTheme, tasks, setTasks } = useContext(appContext);

  const [itemHeight, setItemHeight] = useState(0);
  const [showClass, setShowClass] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");
  const [updateTask, setUpdateTask] = useState(task);
  const [showInput, setShowInput] = useState(false);

  const { css } = useFela({
    currentTheme,
    itemHeight,
    transitionClass,
    checked,
  });

  const itemRef = useRef();

  useEffect(() => {
    setTransitionClass("opacity 1s ease-out");

    setTimeout(() => {
      setShowClass(true);
    }, 15);
  }, []);

  useEffect(() => {
    if (showClass) {
      setItemHeight(itemRef.current.clientHeight);
    }
  }, [showClass]);

  const updateData = (data) => {
    setShowClass(false);
    setTransitionClass("opacity .4s ease-out");
    setTimeout(() => {
      setTasks(data);
    }, 600);
  };

  const handleCheckBox = (checked) => {
    const updateTask = tasks.find((item) => item.id === id);
    updateTask.completed = checked;
    const updatedDB = tasks.map((item) =>
      item.id === updateTask.id ? updateTask : item
    );
    updateData(updatedDB);
  };

  const handleUpdateTask = () => {
    setShowInput(!showInput);
    if (showInput) {
      const update = tasks.find((item) => item.id === id);
      update.task = updateTask;
      const updatedDB = tasks.map((item) =>
        item.id === update.id ? update : item
      );
      setTasks(updatedDB);
    }
  };

  const handleRemoveTask = () => {
    const filteredDB = tasks.filter((item) => item.id !== id);
    updateData(filteredDB);
  };
  console.log(showInput);
  return (
    <>
      <div className={css(rules) + (showClass ? " show" : "")} id={id}>
        <div
          className={"list-item " + (showClass ? " show" : "")}
          ref={itemRef}
        >
          <div className={"box__1"}>
            <CheckBox
              fontSize={1.8}
              checked={checked}
              callback={(checked) => handleCheckBox(checked)}
            />
            {!showInput ? (
              <p>{task}</p>
            ) : (
              <>
                <input
                  className="input-update"
                  type="text"
                  autoFocus
                  value={updateTask}
                  onChange={(e) => setUpdateTask(e.target.value)}
                  onFocus={(e) => e.target.select()}
                />
              </>
            )}
          </div>
          <div className="box__2">
            {showInput && (
              <ButtonSmall event={() => setShowInput(false)}>
                cancel
              </ButtonSmall>
            )}
            {!checked && (
              <ButtonIcon onClick={handleUpdateTask}>
                <EditIcon fontSize={1.8} />
              </ButtonIcon>
            )}
            <ButtonIcon onClick={handleRemoveTask}>
              <TrashIcon fontSize={1.8} />
            </ButtonIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
