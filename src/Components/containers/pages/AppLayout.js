import React from "react";
import { useFela } from "react-fela";
import { Outlet } from "react-router-dom";

const AppLayout = ({ currentTheme }) => {
  const {
    css,
    theme: {
      breakpoints: { desktop },
      scrollBarStyles,
    },
  } = useFela();

  const rules = () => ({
    margin: "0 auto",
    // width: "98vw",
    width: "100vw",
    height: "100vh",
    maxWidth: "1440px",
    maxHeight: "900px",
    // minHeight: "100vh",
    // display: "",
    // overflow: "scroll",
    // ...scrollBarStyles(currentTheme),
    [desktop]: {
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

export default AppLayout;
