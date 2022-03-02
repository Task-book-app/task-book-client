// import React from "react";
import { useFela } from "react-fela";
import { bold, poppins, semi_bold } from "../fonts/Poppins/poppins";

const GlobalStyles = () => {
  const { renderer } = useFela();

  // font-family
  renderer.renderFont("Poppins", poppins);
  renderer.renderFont("Poppins-Bold", bold, {
    fontWeight: "bold",
  });
  renderer.renderFont("Semi-bold", semi_bold, {
    fontWeight: "semi-bold",
  });

  return null;
};

export default GlobalStyles;
