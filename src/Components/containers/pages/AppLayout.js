import React from "react";
import { useFela } from "react-fela";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const {
    css,
    theme: {
      breakpoints: { desktop },
    },
  } = useFela();

  const rules = () => ({
    margin: "0 auto",
    width: "100vw",
    maxWidth: "1440px",
    minHeight: "100vh",

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
