import { Outlet } from "react-router-dom";
import SpiralBackground from "../../presentational/SpiralBackground";

const Auth = ({ laptopScreen, modus }) => {
  const smallImageRules = {
    position: "absolute",
    width: "65%",
    top: "75%",
    left: "75%",
  };

  const laptopBigImagerules = {
    position: "absolute",
    width: "160%",
    right: "65%",
    bottom: "-35%",
  };

  return (
    <>
      {laptopScreen ? (
        <div className="auth">
          <SpiralBackground styles={laptopBigImagerules} />
          <SpiralBackground styles={smallImageRules} />

          <Outlet />
        </div>
      ) : (
        <div className={`auth-${modus}`}>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Auth;
