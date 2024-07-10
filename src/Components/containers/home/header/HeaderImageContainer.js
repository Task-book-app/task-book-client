import React from "react";
import { useFela } from "react-fela";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import useMediaQuery from "../../../hooks/useMediaQuery";

import darkLarge from "../../../../images/hero/original-dark-grande.jpeg";
import lightLarge from "../../../../images/hero/original-light-grande.jpeg";

import lightSmall from "../../../../images/hero/small-light-100w.webp";
import darkSmall from "../../../../images/hero/small-dark-100w.webp";

const HeaderImageContainer = ({ modus }) => {
  const max900 = useMediaQuery("(min-width: 600px) and (max-width: 900px)");

  const {
    css,
    theme: { darkModusBoxes },
  } = useFela();

  const rules = () => ({
    width: "100%",
    aspectRatio: "1280/811",
    padding: "2rem",
    ...darkModusBoxes(modus),
    borderRadius: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <div className={css(rules)}>
      {max900 ? (
        <LazyLoadImage
          alt="Dashboard once a user creates an account"
          width="100%"
          height="100%"
          placeholderSrc={modus === "light" ? lightSmall : darkSmall}
          src={modus === "light" ? lightLarge : darkLarge}
        />
      ) : (
        <LazyLoadImage
          alt="Dashboard once a user creates an account"
          width="100%"
          height="100%"
          // effect="opacity"
          // effect="black-and-white"
          effect="blur"
          placeholderSrc={modus === "light" ? lightSmall : darkSmall}
          src={modus === "light" ? lightLarge : darkLarge}
          wrapperClassName="raper-span-lazy"
        />
      )}
    </div>
  );
};

export default HeaderImageContainer;
