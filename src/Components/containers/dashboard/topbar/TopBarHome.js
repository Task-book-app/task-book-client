import React from "react";
import { useFela } from "react-fela";
import Brand from "../../../presentational/Brand";
import H3 from "../../../presentational/typography/H3";
import BrandSmall from "./BrandSmall";
import BurgerMenu from "./BurgerMenu";
import { Link, NavLink } from "react-router-dom";
import SpiralLogoIcon from "../../../presentational/icons/SpiralLogoIcon";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Avatar from "../../../presentational/Avatar";
import UserTopBar from "./UserTopBar";

const TopBarHome = ({ modus, user }) => {
  const {
    css,
    theme: {
      shadows: { boxShadow_3 },
      colors: { blue },
      breakpoints: { tablet, laptop },
      darkModusBoxes,
      getMediaQuery,
    },
  } = useFela();

  const tabletScreenListener = useMediaQuery(getMediaQuery(tablet));

  const rules = () => ({
    ...darkModusBoxes(modus),
    boxShadow: boxShadow_3,
    padding: "2rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
    },
    "& .navToAuth": {
      fontSize: "2rem",
      "& a": {
        textDecoration: "none",
        ":active": {
          textDecoration: "none",
        },
        ":hover": {
          color: blue,
        },
        [laptop]: { fontSize: "2rem" },
      },
      "& > *": { marginRight: "4rem" },
    },
  });
  return (
    <>
      <div className={css(rules)}>
        {tabletScreenListener ? (
          <>
            <Link to="/dashboard">
              <Brand>
                <H3 color={blue}>
                  Tasks
                  <br />
                  Book
                </H3>
              </Brand>
            </Link>
            {!user && (
              <div className="navToAuth">
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
              </div>
            )}
          </>
        ) : (
          <BrandSmall>
            <BurgerMenu
              fontSize={3}
              //   onClick={handleShowModal}
            />
            <Link to="/dashboard">
              <div className="brand">
                <SpiralLogoIcon fontSize={4.5} />
                <H3 color={blue}>
                  Tasks
                  <br />
                  Book
                </H3>
              </div>
            </Link>
          </BrandSmall>
        )}
        {/* {user && <Avatar picture={user.picture} />} */}
        {user && <UserTopBar />}
      </div>
    </>
  );
};

export default TopBarHome;
