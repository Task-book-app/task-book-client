import React from "react";
import { useFela } from "react-fela";
import LazyImage from "../../../presentational/LazyImage";
import placeholder from "../../../../images/main-dashboard/placeholder-main-dashboard-100w.webp";
import smallMobile from "../../../../images/hero/600-hero/small-600-hero.webp";
import largeMobile from "../../../../images/hero/600-hero/600-rsz_dashboard-main.jpg";

import smallTablet from "../../../../images/hero/900-hero/small-900-hero.webp";
import largeTablet from "../../../../images/hero/900-hero/900-rsz_1dashboard-main.jpg";

import smallDesktop from "../../../../images/main-dashboard/desktop-main-dashboard/small1000.webp";
import largeDesktop from "../../../../images/main-dashboard/desktop-main-dashboard/large-dashboard-main-grande-original.png";

const HeaderImageContainer = ({ modus }) => {
  const {
    css,
    theme: { darkModusBoxes },
  } = useFela();

  const rules = () => ({
    width: "auto",
    height: "fit-content",
    padding: "2rem",
    ...darkModusBoxes(modus),
    borderRadius: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <div className={css(rules)}>
      <LazyImage
        placeholderSrc={placeholder} // Placeholder inicial
        tabletPlaceholder={smallTablet} // Placeholder para tablet
        mobilePlaceholder={smallMobile} // Placeholder para móvil
        desktopPlaceholder={smallDesktop} // Placeholder para desktop
        mobileSrcSet={largeMobile} // Imagen de alta calidad para móvil
        tabletSrcSet={largeTablet} // Imagen de alta calidad para tablet
        desktopSrcSet={largeDesktop} // Imagen de alta calidad para desktop
        alt="Descripción de la imagen"
        className="responsive-img"
      />
    </div>
  );
};

export default HeaderImageContainer;
