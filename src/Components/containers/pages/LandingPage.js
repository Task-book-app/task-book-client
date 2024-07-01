import React, { useContext } from "react";
import TopBarHome from "../dashboard/topbar/TopBarHome";
import { appContext } from "../../../context/GlobalContext";

const LandingPage = () => {
  const { currentTheme } = useContext(appContext);
  return (
    <>
      <TopBarHome modus={currentTheme} />
      <div>
        <h1>LandingPage</h1>
      </div>
    </>
  );
};

export default LandingPage;
