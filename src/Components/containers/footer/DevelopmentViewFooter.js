import React from "react";
import H3 from "../../presentational/typography/H3";
import FontAwesomeListItem from "../../presentational/FontAwesomeListItem";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const DevelopmentViewFooter = () => {
  return (
    <>
      <div className="footer-features-development">
        <H3 fontFamily={"Poppins-Bold"}>Developed by:</H3>
        <ul
          className="fa-ul list"
          style={{
            "--fa-li-width": "1.6em",
            "--fa-li-margin": "1.5em",
          }}
        >
          <FontAwesomeListItem
            href="https://habid-badillo.vercel.app"
            icon={faCode}
            // transform={"shrink-10"}
            boldContent="Habid Badillo"
            content="-> have a look at my website."
          />
          <FontAwesomeListItem
            href="https://github.com/Task-book-app/tasks-book-client?tab=readme-ov-file"
            icon={faGithub}
            // transform={"shrink-10"}
            boldContent="GitHub"
            content="-> have a look at the repository."
          />
          <FontAwesomeListItem
            href="https://www.linkedin.com/in/habidbadillo"
            icon={faLinkedinIn}
            // transform={"shrink-10"}
            boldContent="linkedin"
            content="-> have a look at my profile."
          />
        </ul>
      </div>
    </>
  );
};

export default DevelopmentViewFooter;
