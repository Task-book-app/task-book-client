import { useContext } from "react";
import { useFela } from "react-fela";
import DropDownItem from "../../presentational/DropDownItem";
import ListContainer from "./ListContainer";
import GearIcon from "../../presentational/icons/GearIcon";
import LogOutIcon from "../../presentational/icons/LogOutIcon";
import { appContext } from "../../../context/GlobalContext";
import ButtonMenu from "../../presentational/ButtonMenu";
import SunIcon from "../../presentational/icons/SunIcon";
import MoonIcon from "../../presentational/icons/MoonIcon";
import UserIcon from "../../presentational/icons/UserIcon";

const DropDown = () => {
  const { css, theme } = useFela();
  const { currentTheme, themeToggler } = useContext(appContext);

  const rules = () => ({
    padding: "1rem 0",
    position: "absolute",

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
        <DropDownItem title={"Profile"} link={"profile"}>
          <UserIcon fontSize={1.2} />
        </DropDownItem>

        <DropDownItem title={"Settings"} link={"settings"}>
          <GearIcon fontSize={1.2} />
        </DropDownItem>

        <ButtonMenu
          padding="1.25rem 2rem"
          fontSize={1.2}
          title={currentTheme === "light" ? "Dark Mode" : "Light Mode"}
          event={themeToggler}
        >
          {currentTheme === "light" ? (
            <MoonIcon fontSize={1.2} />
          ) : (
            <SunIcon fontSize={1.2} />
          )}
        </ButtonMenu>

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
