import React from "react";
import { useParams } from "react-router-dom";
import Lock from "../../../presentational/Lock";
import H1 from "../../../presentational/typography/H1";

const Categorie = () => {
  let { categorie } = useParams();
  if (!categorie) {
    categorie = "all";
  }
  const categories = ["all", "home", "family", "work", "sports", "list-item"];

  const founded = categories.find(
    (item) => item.toLowerCase() === categorie.toLowerCase()
  );
  console.log(categorie);
  return (
    <main
      style={{
        flex: "1 1 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {founded ? (
        <>
          <H1 color={"purple"}>{founded}</H1>
          <Lock width="50" height="50" fill="green" />
        </>
      ) : (
        <>
          <H1 color={"purple"}>Categorie not Found</H1>
          <Lock width="50" height="50" fill="blue" />
        </>
      )}
    </main>
  );
};

export default Categorie;
