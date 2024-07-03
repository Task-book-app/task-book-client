import React, { useState, useContext } from "react";
import { useFela } from "react-fela";
import Avatar from "../../../presentational/Avatar";
import ToogleDropDown from "../../../presentational/ToogleDropDown";
import H4 from "../../../presentational/typography/H4";
import DropDown from "../DropDown";
import DropDownItem from "../../../presentational/DropDownItem";
import ListContainer from "../ListContainer";
// import GearIcon from "../../../presentational/icons/GearIcon";
import LogOutIcon from "../../../presentational/icons/LogOutIcon";
import ButtonMenu from "../../../presentational/ButtonMenu";
import SunIcon from "../../../presentational/icons/SunIcon";
import MoonIcon from "../../../presentational/icons/MoonIcon";
import UserIcon from "../../../presentational/icons/UserIcon";
import { appContext } from "../../../../context/GlobalContext";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons/faTableColumns";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
// import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

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
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
      {showDropDown && (
        <DropDown width={"17rem"} border={"1px solid " + blue}>
          <ListContainer marginBottom={0}>
            <DropDownItem
              title={"Dashboard"}
              link="/dashboard"
              icon={faTableColumns}
            />
            {/* <DropDownItem
              title={"Profile"}
              link="/dashboard/profile"
              icon={faUser}
            /> */}
            <DropDownItem
              title={"Profile"}
              link="/dashboard/profile"
              icon={faUser}
            />
            <DropDownItem title={"Profile"} link="/dashboard/profile">
              {/* <UserIcon fontSize={1.2} /> */}
              <UserIcon />
            </DropDownItem>

            {/* <DropDownItem title={"Settings"} link={"settings"}>
              <GearIcon fontSize={1.2} />
            </DropDownItem> */}

            {/* <ButtonMenu
              padding="1.25rem 2rem"
              fontSize={1.2}
              title="Settings"
              event={null}
            >
              <GearIcon fontSize={1.2} />
            </ButtonMenu> */}

            <ButtonMenu
              padding="1.25rem 2rem"
              fontSize={1.6}
              title={currentTheme === "light" ? "Dark Mode" : "Light Mode"}
              event={themeToggler}
            >
              {currentTheme === "light" ? (
                <MoonIcon
                // fontSize={1.2}
                />
              ) : (
                <SunIcon
                // fontSize={1.2}
                />
              )}
            </ButtonMenu>

            <ButtonMenu
              padding="1.25rem 2rem"
              fontSize={1.6}
              title="Log Out"
              event={logoutMutation}
              hoverColor={danger}
            >
              <LogOutIcon
              // fontSize={1.2}
              />
            </ButtonMenu>
          </ListContainer>
        </DropDown>
      )}
    </div>
  );
};

export default UserTopBar;
