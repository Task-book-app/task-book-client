import React from "react";
import { useFela } from "react-fela";
import DropDownItem from "../../presentational/DropDownItem";
import ListContainer from "./ListContainer";
import { faUser, faMoon } from "@fortawesome/free-regular-svg-icons";
import GearIcon from "../../presentational/icons/GearIcon";
import LogOutIcon from "../../presentational/icons/LogOutIcon";

const DropDown = () => {
  const { css, theme } = useFela();

  const rules = () => ({
    position: "absolute",
    ...theme.boxesGeneral,

    transform: "translateY(100%)",
    bottom: 0,
    right: 0,
  });

  return (
    <div className={css(rules)}>
      <ListContainer marginBottom={2.5}>
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
