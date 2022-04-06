import React from "react";
import SideBar from "../dashboard/sideBar/SideBar";
import MainView from "../dashboard/MainView";
import { useFela } from "react-fela";
import Footer from "../dashboard/boxes/Footer";

const DashboardLayout = () => {
  const { css, theme } = useFela();
  const rules = () => ({
    height: "100vh",
    maxHeight: "900px",

    display: "flex",

    [theme.breakpoints.desktop]: {
      maxWidth: "1600px",
      maxHeight: "992px",
    },
  });
  return (
    <>
      <div className={css(rules)}>
        <SideBar />
        <MainView />
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
