import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import BrandSmall from "../topbar/BrandSmall";

const SideBarSmallScreen = ({ handleCloseModal }) => {
  const { css, theme } = useFela();

  const { currentTheme } = useContext(appContext);
  const rules = () => ({
    ...theme.darkModusBoxes(currentTheme),
    minHeight: "100vh",
    padding: "1.6rem",
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
      <BrandSmall onClick={handleCloseModal} />
    </div>
  );
};

export default SideBarSmallScreen;
