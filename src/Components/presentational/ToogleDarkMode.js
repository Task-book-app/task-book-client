import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import SunIcon from "./icons/SunIcon";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";

const ToogleDarkMode = () => {
  const { css } = useFela();

  const { currentTheme, themeToggler } = useContext(appContext);

  const rules = () => ({
    cursor: "pointer",
    // transition: "all 0.50s linear",
  });

  return (
    <div className={css(rules)} onClick={themeToggler}>
      {currentTheme === "light" ? (
        <FontAwesomeIcon icon={faMoon} fontSize={"2.3rem"} />
      ) : (
        <SunIcon fontSize={2.5} />
      )}
    </div>
  );
};

export default ToogleDarkMode;
