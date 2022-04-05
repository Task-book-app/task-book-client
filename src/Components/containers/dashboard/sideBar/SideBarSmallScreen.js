import React, { useContext } from "react";
import { useFela } from "react-fela";
import { Link } from "react-router-dom";
import { appContext } from "../../../../context/GlobalContext";
import SpiralLogoIcon from "../../../presentational/icons/SpiralLogoIcon";
import H3 from "../../../presentational/typography/H3";
import BrandSmall from "../topbar/BrandSmall";
import BurgerMenu from "../topbar/BurgerMenu";
import Categories from "./Categories";
import LogOut from "./LogOut";

const SideBarSmallScreen = ({ handleCloseModal }) => {
  const { css, theme } = useFela();

  const { currentTheme } = useContext(appContext);
  const rules = () => ({
    ...theme.darkModusBoxes(currentTheme),
    minHeight: "100vh",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    filter: "drop-shadow(0px 10px 25px rgba(29, 52, 54, 0.08))",
    "& > :not(:last-child)": {
      marginBottom: "6rem",
    },
  });

  return (
    <div className={css(rules)}>
      <BrandSmall>
        <BurgerMenu fontSize={3} onClick={handleCloseModal} />
        <Link to="/dashboard" onClick={handleCloseModal}>
          <div className="brand">
            <SpiralLogoIcon fontSize={4.5} />
            <H3 color={theme.colors.blue}>
              Tasks
              <br />
              Book
            </H3>
          </div>
        </Link>
      </BrandSmall>
      <Categories onClick={handleCloseModal} />
      <LogOut onClick={handleCloseModal} />
    </div>
  );
};

export default SideBarSmallScreen;
