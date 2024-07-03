import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useFela } from "react-fela";
import { combineRules } from "fela";
import { appContext } from "../../context/GlobalContext";

const rules = () => ({
  textDecoration: "none",
  padding: "1.25rem 2rem",

  display: "flex",
  alignItems: "center",

  fontSize: "1.6rem",
  // lineHeight: "2rem",
  // lineHeight: "1.5rem",

  "& > :first-child": {
    marginRight: "1rem",
  },
});

const DropDownItem = ({ children, title = "", icon = "", link = "" }) => {
  const {
    css,
    theme: { darkModusDropDown },
  } = useFela();

  const { currentTheme } = useContext(appContext);

  const rulesActive = () => ({
    ...darkModusDropDown(currentTheme),
  });

  const rulesInactive = () => ({
    color: "inherit",
    ":visited": {
      color: "inherit",
    },

    ":hover": {
      ...darkModusDropDown(currentTheme),
    },
  });

  const activeCombined = combineRules(rules, rulesActive);
  const inactiveCombined = combineRules(rules, rulesInactive);

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          css(isActive ? activeCombined : inactiveCombined)
        }
        end
      >
        {icon ? (
          <FontAwesomeIcon icon={icon} fixedWidth pull="left" />
        ) : (
          children
        )}
        {title}
      </NavLink>
    </li>
  );
};

export default DropDownItem;
