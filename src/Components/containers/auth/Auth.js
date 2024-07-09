import Brand from "../../presentational/Brand";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useFela } from "react-fela";
import SpiralBackground from "../../presentational/SpiralBackground";

const Auth = ({ laptopScreen }) => {
  const {
    theme: {
      breakpoints: { mobile_L, tablet, laptop, laptop_L },
    },
  } = useFela();

  // breakpoints for Brand component
  const brandBp = {
    [mobile_L]: {
      top: "3rem",
      right: "3rem",
    },
    [tablet]: {
      right: "8rem",
    },
    [laptop]: {
      right: "5rem",
    },
    [laptop_L]: {
      right: "8rem",
    },
  };

  const smallImageRules = {
    position: "absolute",
    width: "50%",
    top: "80%",
    left: "75%",
  };

  const laptopBigImagerules = {
    position: "absolute",
    width: "160%",
    right: "65%",
    bottom: "-25%",
    // right: `${dimensions.width / 3}px`,
  };

  return (
    <div className="auth">
      <Brand position="absolute" right="1.5rem" top="1rem" bp={brandBp}>
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inactiveLink"
          }
          end
        >
          Log In
        </NavLink>
        <NavLink
          to="/auth/signup"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inactiveLink"
          }
        >
          Sign Up
        </NavLink>
      </Brand>
      {laptopScreen && (
        <>
          <SpiralBackground styles={laptopBigImagerules} />
          <SpiralBackground styles={smallImageRules} />
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Auth;
