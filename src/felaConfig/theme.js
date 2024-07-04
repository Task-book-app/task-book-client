const theme = {
  breakpoints: {
    mobile_M: `@media only screen and (min-width: 23.4375em)`, // 375px
    mobile_L: `@media only screen and (min-width: 26.5625em)`, // 425px
    tablet: `@media only screen and (min-width: 48em)`, // 768px
    laptop: `@media only screen and (min-width: 64em)`, // 1024px
    laptop_L: `@media only screen and (min-width: 90em)`, // 1440px
    desktop: `@media only screen and (min-width: 100em)`, // 1600px
  },

  //  colors
  colors: {
    blue: "#0aa7bd",

    dark: "#4b4b4b",
    bg_dark: "#222831",
    bg_box_dark: "#2c3440",
    black: "#000000",

    white: "#ffffff",
    whiteBtn: "#f9f7f6",
    bg_light: "#fafafa",

    whiteText: "#f9f9f9",

    greyLight: "#bebebe",

    danger: "#f05454",
  },

  // gradients
  gradients: {
    blueGradient: "linear-gradient(90.17deg, #09A7BC 0.19%, #2EC0EE 99.77%)",
  },

  // box-shadow
  shadows: {
    boxShadow_1: "0 1rem 2rem rgba(0, 0, 0, 0.1)",
    boxShadow_2: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    boxShadow_3: "0px 10px 25px rgba(29, 52, 54, 0.08)",
  },

  // flex combis
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // button styles
  buttonStyles: {
    borderRadius: "0.5rem",
    transition: "all 0.05s",
    ":hover": {
      transform: "translateY(-1px)",
      cursor: "pointer",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
    ":active": {
      transform: "translateY(1px)",
    },
  },

  boxesGeneral: {
    padding: "2rem",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "1rem",
  },

  // methods
  darkModusLayout: (modus) => {
    const currentModus =
      modus === "light"
        ? {
            backgroundColor: "#fafafa",
            color: "#4b4b4b",
          }
        : { backgroundColor: "#222831", color: "#f9f9f9" };

    return { transition: "all 0.50s linear", ...currentModus };
  },

  darkModusBoxes: (modus) => {
    const currentModus =
      modus === "light"
        ? {
            backgroundColor: "#ffffff",
          }
        : { backgroundColor: "#2c3440" };

    return { transition: "all 0.50s linear", ...currentModus };
  },

  darkModusDropDown: (modus) => {
    const currentModus =
      modus === "light"
        ? {
            backgroundColor: "#fafafa",
          }
        : { backgroundColor: "#222831" };

    return { color: "#0aa7bd", ...currentModus };
  },

  scrollBarStyles: (modus) => {
    const backgroundScrollbar = modus === "light" ? "#ffffff" : "#2c3440";

    return {
      scrollbarWidth: "thin", //Firefox, Chrome,
      scrollbarColor: `#0aa7bd ${backgroundScrollbar}`, //Firefox, Chrome,
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: backgroundScrollbar,
      },

      "::-webkit-scrollbar-thumb": {
        background: "linear-gradient(90.17deg, #09A7BC 0.19%, #2EC0EE 99.77%)",
        borderRadius: "50px",
      },
    };
  },

  getMediaQuery: (longMediaQuery) => {
    const regex = /\(([^)]+)\)/;
    const match = longMediaQuery.match(regex);
    return match ? match[0] : null;
  },
};

export default theme;
