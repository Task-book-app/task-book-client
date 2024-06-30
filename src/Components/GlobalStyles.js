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

  // Global Styles
  renderer.renderStatic(`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
        font-size: 50%;
        font-family: "Poppins";
    }

    @media only screen and (min-width: 64em) {
        html{
          font-size: 62.5%;
        }
    }

    body{
      box-sizing: border-box;
    }
`);

  return null;
};

export default GlobalStyles;
