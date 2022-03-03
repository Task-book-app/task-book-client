import React, { useContext } from "react";
import { useFela } from "react-fela";
import { Outlet } from "react-router-dom";
import { appContext } from "../../../context/GlobalContext";

const MainLayout = () => {
  const { css, theme } = useFela();

  const { currentTheme } = useContext(appContext);
  const rules = () => ({
    color:
      currentTheme === "light" ? theme.colors.dark : theme.colors.whiteText,
    background:
      currentTheme === "light" ? theme.colors.bg_light : theme.colors.bg_dark,
    transition: "all 0.50s linear",
    margin: "0 auto",
    width: "100vw",
    maxWidth: "1440px",
    minHeight: "100vh",

    [theme.breakpoints.desktop]: {
      maxWidth: "1600px",
      maxHeight: "992px",
    },
  });

  return (
    <div className={css(rules)}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
