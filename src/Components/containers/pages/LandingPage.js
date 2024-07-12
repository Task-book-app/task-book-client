import React, { useContext } from "react";
import TopBarHome from "../home/TopBarHome";
import { appContext } from "../../../context/GlobalContext";
import Header from "../home/header/Header";
import Footer from "../footer/Footer";

const LandingPage = () => {
  const { currentTheme, user, themeToggler } = useContext(appContext);

  return (
    <>
      <TopBarHome
        modus={currentTheme}
        user={user}
        themeToggler={themeToggler}
      />
      <Header modus={currentTheme} user={user} />
      <Footer modus={currentTheme} />
    </>
  );
};

export default LandingPage;
