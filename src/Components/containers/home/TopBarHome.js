import React, { useState } from "react";
import { useFela } from "react-fela";
import Brand from "../../presentational/Brand";
import H3 from "../../presentational/typography/H3";
import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import UserTopBar from "../dashboard/topbar/UserTopBar";
import ToogleDropDown from "../../presentational/ToogleDropDown";
import DropDown from "../dashboard/DropDown";
import ListContainer from "../dashboard/ListContainer";
import DropDownItem from "../../presentational/DropDownItem";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";

const TopBarHome = ({ modus, user }) => {
  // toogles the dropdown for sign up and log in.
  const [showDropDown, setShowDropDown] = useState(false);

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
    position: "relative",
    boxShadow: boxShadow_3,
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [laptop]: { padding: "2rem 2rem" },
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
        <Link to="/">
          <Brand>
            <H3 color={blue}>
              Tasks
              <br />
              Book
            </H3>
          </Brand>
        </Link>
        {tabletScreenListener ? (
          <>
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
          <>
            {!user && (
              <>
                <ToogleDropDown
                  width={"6rem"}
                  height={"6rem"}
                  fontSize={"4rem"}
                  showDropDown={showDropDown}
                  setShowDropDown={setShowDropDown}
                />
                {showDropDown && (
                  <DropDown width={"19rem"} border={"1px solid " + blue}>
                    <ListContainer marginBottom={0}>
                      <DropDownItem
                        title={"Sign Up"}
                        link="/auth/signup"
                        icon={faUserPlus}
                      />
                      <DropDownItem
                        title={"Log In"}
                        link="/auth"
                        icon={faKey}
                      />
                    </ListContainer>
                  </DropDown>
                )}
              </>
            )}
          </>
        )}
        {user && <UserTopBar />}
      </div>
    </>
  );
};

export default TopBarHome;
