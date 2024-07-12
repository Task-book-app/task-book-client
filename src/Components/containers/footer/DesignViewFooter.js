import React from "react";
import H3 from "../../presentational/typography/H3";
import { faFigma } from "@fortawesome/free-brands-svg-icons/faFigma";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons/faPenFancy";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons/faFontAwesome";
import FontAwesomeListItem from "../../presentational/FontAwesomeListItem";
const DesignViewFooter = () => {
  return (
    <div className="footer-features-design">
      <H3 fontFamily={"Poppins-Bold"}>Design:</H3>
      <ul
        className="fa-ul list"
        style={{
          "--fa-li-width": "1.6em",
          "--fa-li-margin": "1.5em",
        }}
      >
        <FontAwesomeListItem
          href="https://www.figma.com/"
          icon={faFigma}
          // transform={"shrink-10"}
          boldContent="Figma"
          content="designs inspired by:"
        />
        <ul className="fa-ul list-sublist">
          <FontAwesomeListItem
            href="https://www.figma.com/@oter"
            icon={faPenFancy}
            // transform={"shrink-10"}
            boldContent="CupTeam,"
            content="dashboard page."
          />
          <FontAwesomeListItem
            href="https://www.figma.com/@DraxAtelier"
            icon={faPenFancy}
            // transform={"shrink-10"}
            boldContent="Darsh Bhavsar,"
            content="Log In - Sign Up pages."
          />
        </ul>
        <FontAwesomeListItem
          href="https://fontawesome.com/"
          icon={faFontAwesome}
          // transform={"shrink-10"}
          boldContent="Font Awesome,"
          content="icons."
        />
      </ul>
    </div>
  );
};

export default DesignViewFooter;
