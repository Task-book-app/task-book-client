import CircleBg from "../../presentational/CircleBg";
import Auth from "../auth/Auth";
import { useFela } from "react-fela";
import { useContext } from "react";
import { appContext } from "../../../context/GlobalContext";
import { Navigate } from "react-router-dom";
import TopBarHome from "../home/TopBarHome";
import useMediaQuery from "../../hooks/useMediaQuery";
import Footer from "../footer/Footer";

const AuthLayout = () => {
  const { user, currentTheme, themeToggler } = useContext(appContext);
  const {
    css,
    theme: {
      breakpoints: { laptop },
      getMediaQuery,
    },
  } = useFela();

  const laptopScreen = useMediaQuery(getMediaQuery(laptop));

  const containerLayout = () => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  });

  return (
    <>
      {user ? (
        <Navigate replace to="/dashboard" user={user} />
      ) : (
        <>
          <div className={css(containerLayout)}>
            <TopBarHome modus={currentTheme} themeToggler={themeToggler} />
            <div className="auth-layout">
              {laptopScreen && <CircleBg />}

              <Auth laptopScreen={laptopScreen} modus={currentTheme} />
            </div>
          </div>
          <Footer modus={currentTheme} />
        </>
      )}
    </>
  );
};

export default AuthLayout;
