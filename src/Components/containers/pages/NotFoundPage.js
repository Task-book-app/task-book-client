import React, { useContext } from "react";
import H1 from "../../presentational/typography/H1";
import TopBarHome from "../home/TopBarHome";
import { appContext } from "../../../context/GlobalContext";
import CustomLink from "../../presentational/CustomLink";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  const { currentTheme, user, themeToggler } = useContext(appContext);
  return (
    <>
      <Helmet>
        <title>404 - ¡Oops! Page not found.</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <TopBarHome
        modus={currentTheme}
        user={user}
        themeToggler={themeToggler}
      />
      <div className="page-not-found">
        <div className="page-not-found__container">
          <H1 color={"#f05454"} lineHeight={"unset"} fontSize={10}>
            404
          </H1>
          <H1 lineHeight={"unset"} fontSize={5} opacity={"0.9"}>
            ¡Oops! Page not found.
          </H1>
          <p className="page-not-found__message">
            The page you are looking for does not exist or has been moved.
          </p>
          <CustomLink to="/" fontSize={2}>
            <p>Back to Home!</p>
            <FontAwesomeIcon icon={faHome} fixedWidth pull="right" />
          </CustomLink>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
