import React, { useContext } from "react";
import { useFela } from "react-fela";
import DropDownItem from "../../presentational/DropDownItem";
import ListContainer from "./ListContainer";
import { faUser, faMoon } from "@fortawesome/free-regular-svg-icons";
import GearIcon from "../../presentational/icons/GearIcon";
import LogOutIcon from "../../presentational/icons/LogOutIcon";
import { appContext } from "../../../context/GlobalContext";

const DropDown = () => {
  const { css, theme } = useFela();
  const { currentTheme } = useContext(appContext);

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
        <DropDownItem title={"Dark Mode"} icon={faMoon} link={"darkmode"} />
        <DropDownItem title={"Settings"} link={"settings"}>
          <GearIcon fontSize={1.2} />
        </DropDownItem>
        <DropDownItem title={"Log Out"} link={"logout"}>
          <LogOutIcon fontSize={1.2} />
        </DropDownItem>
      </ListContainer>
    </div>
  );
};

export default DropDown;
