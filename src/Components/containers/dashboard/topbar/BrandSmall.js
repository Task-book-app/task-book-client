import React from "react";
import { useFela } from "react-fela";
import { Link } from "react-router-dom";
import SpiralLogoIcon from "../../../presentational/icons/SpiralLogoIcon";
import H3 from "../../../presentational/typography/H3";
import BurgerMenu from "./BurgerMenu";

const rules = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& > :not(:last-child)": {
    marginRight: "3rem",
  },

  "& a": {
    textDecoration: "none",
  },

  "& .brand": {
    display: "flex",
    alignItems: "center",
    "& > :not(:last-child)": {
      marginRight: "1rem",
    },
  },
});

export const BrandSmall = () => {
  const { css, theme } = useFela();
  return (
    <div className={css(rules)}>
      <BurgerMenu fontSize={3} />
      <Link to="/dashboard">
        <div className="brand">
          <SpiralLogoIcon fontSize={4.5} />
          <H3 color={theme.colors.blue}>
            Tasks
            <br />
            Book
          </H3>
        </div>
      </Link>
    </div>
  );
};
