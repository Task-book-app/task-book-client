import { createRenderer } from "fela";
import { bold, poppins, semi_bold } from "../fonts/Poppins/poppins";

const renderer = createRenderer();

// font-family
renderer.renderFont("Poppins", poppins);
renderer.renderFont("Poppins-Bold", bold, {
  fontWeight: "bold",
});
renderer.renderFont("Semi-bold", semi_bold, {
  fontWeight: "semi-bold",
});

export default renderer;
