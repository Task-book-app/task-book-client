import React from "react";
import { useParams } from "react-router-dom";
import H1 from "../../../presentational/typography/H1";

const Categorie = () => {
  const { categorie } = useParams();
  const categories = ["all", "home", "family", "work", "sports", "list-item"];

  const founded = categories.find(
    (item) => item.toLowerCase() === categorie.toLowerCase()
  );
  if (!founded)
    return (
      <main>
        <H1 color={"white"}>Categorie not Found</H1>
      </main>
    );
  return <H1 color={"white"}>{founded}</H1>;
};

export default Categorie;
