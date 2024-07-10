import CircleBg from "../../presentational/CircleBg";
import Auth from "../auth/Auth";
import { useFela } from "react-fela";
import { useContext } from "react";
import { appContext } from "../../../context/GlobalContext";
import { Navigate } from "react-router-dom";
import TopBarHome from "../home/TopBarHome";
import useMediaQuery from "../../hooks/useMediaQuery";

const AuthLayout = () => {
  const { user, currentTheme } = useContext(appContext);
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
        <div className={css(containerLayout)}>
          <TopBarHome modus={currentTheme} />
          <div className="auth-layout">
            {laptopScreen && <CircleBg />}

            <Auth laptopScreen={laptopScreen} modus={currentTheme} />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
