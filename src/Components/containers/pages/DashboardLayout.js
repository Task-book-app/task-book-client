import React from "react";
import SideBar from "../dashboard/sideBar/SideBar";
import MainView from "../dashboard/MainView";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <MainView />
    </div>
  );
};

export default DashboardLayout;
