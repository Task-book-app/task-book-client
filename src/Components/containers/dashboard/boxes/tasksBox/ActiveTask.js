import React, { useContext, useState, useRef, useEffect } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";
import ButtonIcon from "../../../../presentational/ButtonIcon";
import CheckBox from "../../../../presentational/CheckBox";
import EditIcon from "../../../../presentational/icons/EditIcon";
import TrashIcon from "../../../../presentational/icons/TrashIcon";

const rules = ({ currentTheme, itemHeight, transitionClass }) => ({
  height: 0,
  fontSize: "1.4rem",
  lineHeight: "1.9rem",
  letterSpacing: "0.02em",
  transition: transitionClass,

  cursor: "pointer",
  position: "relative",

  "&.show": {
    height: `${itemHeight}px`,
    marginTop: "10px",
  },

  "& .list-item": {
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

    transition: "all 0.6s ease-out",
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
      transform: "translateX(6rem)",
      transition: "all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",

      "& > :not(:last-child)": {
        marginRight: "1rem",
      },
    },
  },
});

const ActiveTask = ({ task, checked, id }) => {
  const { currentTheme } = useContext(appContext);

  const [itemHeight, setItemHeight] = useState(0);
  const [showClass, setShowClass] = useState(true);
  const [transitionClass, setTransitionClass] = useState("");

  const { css } = useFela({
    currentTheme,
    itemHeight,
    transitionClass,
  });

  const itemRef = useRef();

  useEffect(() => {
    if (showClass) {
      setItemHeight(itemRef.current.clientHeight);
      setTimeout(() => {
        setTransitionClass("all 0.6s ease-out");
      }, 0);
    }
  }, [showClass]);

  return (
    <div className={css(rules) + (showClass ? " show" : "")} id={id}>
      <div className={"list-item " + (showClass ? " show" : "")} ref={itemRef}>
        <div className={"box box__1"}>
          <CheckBox
            fontSize={1.8}
            checked={checked}
            id={id}
            setShowClass={setShowClass}
          />
          <p>{task}</p>
        </div>

        <div className="box box__2">
          <ButtonIcon>
            <EditIcon fontSize={1.8} />
          </ButtonIcon>
          <ButtonIcon>
            <TrashIcon fontSize={1.8} />
          </ButtonIcon>
        </div>
      </div>
    </div>
  );
};

export default ActiveTask;
