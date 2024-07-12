import React, { useContext } from "react";
import SideBar from "../dashboard/sideBar/SideBar";
import MainView from "../dashboard/MainView";
import { useFela } from "react-fela";
import { Navigate } from "react-router-dom";
import { appContext } from "../../../context/GlobalContext";

const DashboardLayout = () => {
  const { user, currentTheme, logoutMutation } = useContext(appContext);
  const { css } = useFela();

  const rules = () => ({
    width: "100%",
    height: "100%",
    display: "flex",
  });

  return (
    <>
      {!user && <Navigate replace to="/auth" />}
      <div className={css(rules)}>
        <SideBar currentTheme={currentTheme} logoutMutation={logoutMutation} />
        <MainView currentTheme={currentTheme} />
      </div>
    </>
  );
};

export default DashboardLayout;
