import React from "react";
import { useFela } from "react-fela";

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
    justifyContent: "space-between",

    "& > :not(:last-child)": {
      marginRight: "1rem",
    },
  },
});

const BrandSmall = ({ children }) => {
  const { css } = useFela();

  return <div className={css(rules)}>{children}</div>;
};

export default BrandSmall;
