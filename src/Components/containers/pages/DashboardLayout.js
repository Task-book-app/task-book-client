import React, { useContext } from "react";
import SideBar from "../dashboard/sideBar/SideBar";
import MainView from "../dashboard/MainView";
import { useFela } from "react-fela";
import { Navigate } from "react-router-dom";
import { appContext } from "../../../context/GlobalContext";

const DashboardLayout = () => {
  const { user } = useContext(appContext);
  const {
    css,
    theme: {
      breakpoints: { desktop },
    },
  } = useFela();

  const rules = () => ({
    margin: "auto",
    height: "100vh",
    maxHeight: "900px",

    display: "flex",

    [desktop]: {
      maxWidth: "1600px",
      maxHeight: "992px",
    },
  });

  return (
    <>
      {!user && <Navigate replace to="/auth" />}

      <div className={css(rules)}>
        <SideBar />
        <MainView />
      </div>
    </>
  );
};

export default DashboardLayout;
