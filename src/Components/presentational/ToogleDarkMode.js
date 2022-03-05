import React, { useContext } from "react";
import SunIcon from "./icons/SunIcon";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";
import MoonIcon from "./icons/MoonIcon";

const ToogleDarkMode = () => {
  const { css } = useFela();

  const { currentTheme, themeToggler } = useContext(appContext);

  const rules = () => ({
    cursor: "pointer",
  });

  return (
    <div className={css(rules)} onClick={themeToggler}>
      {currentTheme === "light" ? (
        <MoonIcon fontSize={2.5} />
      ) : (
        <SunIcon fontSize={2.5} />
      )}
    </div>
  );
};

export default ToogleDarkMode;
