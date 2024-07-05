import React, { useContext } from "react";
import TopBarHome from "../home/TopBarHome";
import { appContext } from "../../../context/GlobalContext";
import Header from "../home/Header";

const LandingPage = () => {
  const { currentTheme, user } = useContext(appContext);
  return (
    <>
      <TopBarHome modus={currentTheme} user={user} />
      <Header modus={currentTheme} user={user} />
      <div>
        <h1>LandingPage</h1>
      </div>
    </>
  );
};

export default LandingPage;
