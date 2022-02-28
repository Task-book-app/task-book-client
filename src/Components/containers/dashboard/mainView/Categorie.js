import React from "react";
import { useParams } from "react-router-dom";
import Lock from "../../../presentational/Lock";
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
        <H1 color={"purple"}>Categorie not Found</H1>
        <Lock width="50" height="50" fill="blue" />
      </main>
    );
  return (
    <main>
      <H1 color={"purple"}>{founded}</H1>
      <Lock width="50" height="50" fill="green" />
    </main>
  );
};

export default Categorie;
