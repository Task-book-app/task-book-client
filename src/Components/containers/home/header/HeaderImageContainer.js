import React from "react";
import { useFela } from "react-fela";
import smallMobile from "../../../../images/hero/600-hero/small-600-hero.webp";
import largeMobile from "../../../../images/hero/600-hero/600-rsz_dashboard-main.jpg";

import smallTablet from "../../../../images/hero/900-hero/small-900-hero.webp";
import largeTablet from "../../../../images/hero/900-hero/900-rsz_1dashboard-main.jpg";

import smallDesktop from "../../../../images/hero/1000-hero/small1000.webp";
import largeDesktop from "../../../../images/hero/1000-hero/large1000.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import useMediaQuery from "../../../hooks/useMediaQuery";

const HeaderImageContainer = ({ modus }) => {
  const max600 = useMediaQuery("(max-width: 600px)");
  const max900 = useMediaQuery("(min-width: 600px) and (max-width: 900px)");

  const {
    css,
    theme: { darkModusBoxes },
  } = useFela();

  const rules = () => ({
    width: "100%",
    aspectRatio: max600 ? "300/203" : max900 ? "300/203" : "244/165",
    padding: "2rem",
    ...darkModusBoxes(modus),
    borderRadius: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <div className={css(rules)}>
      {max600 ? (
        <LazyLoadImage
          alt="Dashboard once a user creates an account"
          width="100%"
          height="100%"
          placeholderSrc={modus === "light" ? "" : smallMobile}
          src={modus === "light" ? "" : largeMobile}
        />
      ) : max900 ? (
        <LazyLoadImage
          alt="Dashboard once a user creates an account"
          width="100%"
          height="100%"
          placeholderSrc={modus === "light" ? "" : smallTablet}
          src={modus === "light" ? "" : largeTablet}
        />
      ) : modus === "light" ? (
        <LazyLoadImage
          alt="Dashboard once a user creates an account"
          width="100%"
          height="100%"
          // effect="opacity"
          // effect="black-and-white"
          effect="blur"
          placeholderSrc={smallDesktop}
          src={largeDesktop}
          wrapperClassName="raper-span-lazy"
        />
      ) : (
        <LazyLoadImage
          alt="Dashboard once a user creates an account"
          width="100%"
          height="100%"
          // effect="opacity"
          // effect="black-and-white"
          effect="blur"
          placeholderSrc={smallDesktop}
          src={largeDesktop}
          wrapperClassName="raper-span-lazy"
        />
      )}
    </div>
  );
};

export default HeaderImageContainer;
