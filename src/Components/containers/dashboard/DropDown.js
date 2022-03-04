import React, { useContext } from "react";
import { useFela } from "react-fela";
import DropDownItem from "../../presentational/DropDownItem";
import ListContainer from "./ListContainer";
import { faUser, faMoon } from "@fortawesome/free-regular-svg-icons";
import GearIcon from "../../presentational/icons/GearIcon";
import LogOutIcon from "../../presentational/icons/LogOutIcon";
import { appContext } from "../../../context/GlobalContext";
import ButtonMenu from "../../presentational/ButtonMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SunIcon from "../../presentational/icons/SunIcon";

const DropDown = () => {
  const { css, theme } = useFela();
  const { currentTheme, themeToggler } = useContext(appContext);

  const rules = () => ({
    padding: "1rem 0",
    position: "absolute",
    // ...theme.boxesGeneral,
    boxShadow: theme.shadows.boxShadow_3,
    borderRadius: "1rem",

    ...theme.darkModusBoxes(currentTheme),

    transform: "translateY(100%)",
    bottom: 0,
    right: 0,
  });

  return (
    <div className={css(rules)}>
      <ListContainer marginBottom={0}>
        <DropDownItem title={"Profile"} icon={faUser} link={"profile"} />
        <ButtonMenu
          padding="1.25rem 2rem"
          fontSize={1.2}
          title={currentTheme === "light" ? "Dark Mode" : "Light Mode"}
          event={themeToggler}
        >
          {currentTheme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <SunIcon fontSize={1.2} />
          )}
        </ButtonMenu>
        <DropDownItem title={"Settings"} link={"settings"}>
          <GearIcon fontSize={1.2} />
        </DropDownItem>

        <ButtonMenu
          padding="1.25rem 2rem"
          fontSize={1.2}
          title="Log Out"
          event={null}
          hoverColor={theme.colors.danger}
        >
          <LogOutIcon fontSize={1.2} />
        </ButtonMenu>
      </ListContainer>
    </div>
  );
};

export default DropDown;
