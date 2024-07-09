import React, { useContext } from "react";
import SunIcon from "./icons/SunIcon";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";
import MoonIcon from "./icons/MoonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

const ToogleDarkMode = () => {
  const { css } = useFela();

  const { currentTheme, themeToggler } = useContext(appContext);

  const rules = () => ({
    cursor: "pointer",
    // all: "unset",
    backgroundColor: "unset",
    display: "inline-block",
    fontSize: "2.5rem",
    border: "none",
    color: "inherit",
  });

  return (
    <button className={css(rules)} onClick={themeToggler}>
      {currentTheme === "light" ? (
        <FontAwesomeIcon icon={faMoon} fixedWidth pull="left" />
      ) : (
        <FontAwesomeIcon icon={faSun} fixedWidth pull="left" />
      )}
    </button>
  );
};

export default ToogleDarkMode;
