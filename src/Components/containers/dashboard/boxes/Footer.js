import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import BrowserWebPage from "../../../presentational/icons/BrowserWebPage";
import GitHubIcon from "../../../presentational/icons/GitHubIcon";
import LinkedinIcon from "../../../presentational/icons/LinkedinIcon";

const Footer = () => {
  const { css, theme } = useFela();
  const { currentTheme } = useContext(appContext);
  const rules = () => ({
    marginTop: "2rem",
    fontSize: "1.2rem",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",

    ...theme.darkModusBoxes(currentTheme),

    "& > :not(:last-child)": {
      marginBottom: "4rem",
    },

    [theme.breakpoints.mobile_M]: {
      flexDirection: "row",
      "& > :not(:last-child)": {
        marginBottom: 0,
      },
    },

    "& .design": {
      "& p": {
        "& a": { transition: "all" },
        "& a:visited": {
          color: "currentColor",
        },
        "& a:hover": {
          color: theme.colors.blue,
        },
      },
    },

    "& .copyright": {
      textAlign: "center",
    },

    "& .external": {
      listStyle: "none",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& > :not(:last-child)": {
        marginRight: "1rem",
      },

      "& li": {
        "& a": {
          transition: "all",
          fill: "currentColor",
          color: "currentColor",
        },
        "& a:visited": {
          color: "currentColor",
          fill: "currentColor",
        },
        "& a:hover": {
          color: theme.colors.blue,
          fill: theme.colors.blue,
        },
      },
    },
  });
  return (
    <footer className={css(rules)}>
      <div className="design">
        <p>
          Design by:&nbsp;&nbsp;&nbsp;
          <a href="http://cupteam.com.ua/" rel="noreferrer" target="_blank">
            <i>CupTeam</i>
          </a>
        </p>

        <p>
          &&&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.figma.com/@DraxAtelier"
            rel="noreferrer"
            target="_blank"
          >
            <i>Darsh Bhavsar</i>
          </a>
        </p>
      </div>
      <div className="copyright">
        <p>Developed by Habid Badillo.</p>
        <p>2022</p>
      </div>
      <ul className="external">
        <li>
          <a
            href="https://habid-badillo.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <BrowserWebPage fontSize={2} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Task-book-app/task-book-client"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon fontSize={2} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/habidbadillo/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinIcon fontSize={2} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
