import React, { useContext } from "react";
import TopBarHome from "../home/TopBarHome";
import { appContext } from "../../../context/GlobalContext";
import Header from "../home/header/Header";
import Footer from "../footer/Footer";
import SEOHome from "../../SEO/SEOHome";

const LandingPage = () => {
  const { currentTheme, user, themeToggler } = useContext(appContext);

  return (
    <>
      <SEOHome
        title={"Tasks Book - Organize and Prioritize Your Tasks"}
        description={
          "Discover Tasks Book, the to-do list app that helps you stay organized and productive. Try our full-stack platform for free."
        }
        creatorsName={"Habid B. Espinosa"}
        type={"website"}
        keywords={
          "to-do list, task app, productivity application, task organization, full-stack to-do list, motivation"
        }
        siteName={"Tasks Book"}
        urlWebpage={"https://tasks-book-nine.vercel.app"}
      />
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
