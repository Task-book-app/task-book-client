import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import BurgerMenuIcon from "../../../presentational/icons/BurgerMenuIcon";

const BurgerMenu = ({ onClick, fontSize }) => {
  const { currentTheme } = useContext(appContext);
  const { css } = useFela();

  const rules = () => ({
    backgroundColor: "unset",
    border: "none",
    padding: "1.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    "&:hover": {
      cursor: "pointer",
    },
    "&:active": {
      backgroundColor: currentTheme === "light" ? "#ffffff" : "#24454a",
      boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    },
  });

  return (
    <button className={css(rules)} onClick={onClick}>
      <BurgerMenuIcon fontSize={fontSize} />
    </button>
  );
};

export default BurgerMenu;
