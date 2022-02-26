import React from "react";
import H2 from "../../../presentational/typography/H2";
import { useFela } from "react-fela";
import CategoriesList from "./CategoriesList";

const Categories = () => {
  const { css, theme } = useFela();

  const categories = () => ({
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },
  });

  return (
    <div className={css(categories)}>
      <H2 color={theme.colors.blue}>Categories</H2>
      <CategoriesList />
    </div>
  );
};

export default Categories;
