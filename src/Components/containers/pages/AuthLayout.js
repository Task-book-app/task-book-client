import SpiralBackground from "../../presentational/SpiralBackground";
import CircleBg from "../../presentational/CircleBg";
import Auth from "../auth/Auth";
import { useFela } from "react-fela";
import { useContext } from "react";
import { appContext } from "../../../context/GlobalContext";
import { Navigate } from "react-router-dom";
import TopBarHome from "../dashboard/topbar/TopBarHome";
import useMediaQuery from "../../hooks/useMediaQuery";

const AuthLayout = () => {
  const { user } = useContext(appContext);

  const {
    css,
    theme: {
      breakpoints: { mobile_L, tablet, laptop },
      getMediaQuery,
    },
  } = useFela();

  const laptopScreen = useMediaQuery(getMediaQuery(laptop));

  const bigImagerules = {
    position: "absolute",
    width: "160%",
    left: "-100%",

    [mobile_L]: {
      width: "150%",
      left: "-80%",
    },
    [tablet]: {
      width: "120%",
      left: "-50%",
      bottom: "-14%",
    },
  };

  const laptopBigImagerules = {
    position: "absolute",
    width: "72%",
    left: "-8%",
    bottom: "-14%",
  };

  const smallImageRules = {
    position: "absolute",
    width: "40%",
    right: "-10%",
    bottom: "-5%",
    "@media (orientation: 'landscape')": {
      bottom: "-20%",
    },
    [laptop]: {
      width: "25%",
      right: "-10%",
      bottom: "-5%",
    },
  };

  const containerLayout = () => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  });

  return (
    <>
      {user ? (
        <Navigate replace to="/dashboard" />
      ) : (
        <div className={css(containerLayout)}>
          <TopBarHome />
          <div className="auth-layout">
            {laptopScreen ? (
              <SpiralBackground styles={laptopBigImagerules} />
            ) : (
              <SpiralBackground styles={bigImagerules} />
            )}
            <SpiralBackground styles={smallImageRules} />
            <CircleBg />
            <Auth />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
