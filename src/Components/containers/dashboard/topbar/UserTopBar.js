import React, { useState, useContext } from "react";
import { useFela } from "react-fela";
import Avatar from "../../../presentational/Avatar";
import ToogleDropDown from "../../../presentational/ToogleDropDown";
import H4 from "../../../presentational/typography/H4";
import DropDown from "../DropDown";
import DropDownItem from "../../../presentational/DropDownItem";
import ListContainer from "../ListContainer";
import ButtonMenu from "../../../presentational/ButtonMenu";
import { appContext } from "../../../../context/GlobalContext";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons/faTableColumns";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";

const rules = () => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& > :not(:first-child)": {
    marginLeft: "2rem",
  },
});

const UserTopBar = () => {
  const {
    css,
    theme: {
      colors: { danger, blue },
      breakpoints: { tablet },
      getMediaQuery,
    },
  } = useFela();

  const tabletScreenListener = useMediaQuery(getMediaQuery(tablet));

  const { currentTheme, themeToggler, user, logoutMutation } =
    useContext(appContext);

  const [showDropDown, setShowDropDown] = useState(false);

  if (!user) return <></>;

  return (
    <div className={css(rules)}>
      {tabletScreenListener && <H4>{user.username}</H4>}
      <Avatar picture={user.picture} />
      <ToogleDropDown
        width={"3rem"}
        height={"3rem"}
        fontSize={"2rem"}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
      {showDropDown && (
        <DropDown width={"20rem"} border={"1px solid " + blue}>
          <ListContainer marginBottom={0}>
            <DropDownItem title={"Home"} link="/" icon={faHome} />
            <DropDownItem
              title={"Dashboard"}
              link="/dashboard"
              icon={faTableColumns}
            />

            <DropDownItem
              title={"Profile"}
              link="/dashboard/profile"
              icon={faUser}
            />

            <ButtonMenu
              padding="1.25rem 2rem"
              fontSize={1.8}
              title={currentTheme === "light" ? "Dark Mode" : "Light Mode"}
              event={themeToggler}
            >
              {currentTheme === "light" ? (
                <FontAwesomeIcon icon={faMoon} fixedWidth pull="left" />
              ) : (
                <FontAwesomeIcon icon={faSun} fixedWidth pull="left" />
              )}
            </ButtonMenu>

            <ButtonMenu
              padding="1.25rem 2rem"
              fontSize={1.8}
              title="Log Out"
              event={logoutMutation}
              hoverColor={danger}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                fixedWidth
                pull="left"
              />
            </ButtonMenu>
          </ListContainer>
        </DropDown>
      )}
    </div>
  );
};

export default UserTopBar;
