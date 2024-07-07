import React from "react";
import { useFela } from "react-fela";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons/faTableColumns";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from "../../../hooks/useMediaQuery";
import H1 from "../../../presentational/typography/H1";
import CustomLink from "../../../presentational/CustomLink";
import HeaderImageContainer from "./HeaderImageContainer";

const Header = ({ modus, user }) => {
  const {
    css,
    theme: {
      breakpoints: { tablet, laptop },
      getMediaQuery,
    },
  } = useFela();

  const laptopScreenListener = useMediaQuery(getMediaQuery(laptop));

  const rulesContainer = () => ({
    minHeight: "60rem",
    padding: "3rem 1.5rem",
    display: "flex",
    flexDirection: "column",

    [`@media only screen and (max-width: 48em)`]: {
      "& >:not(:last-child)": { marginBottom: "5rem" },
    },
    [`${tablet} and (max-width: 64em)`]: {
      padding: "4rem 5rem",
      flexDirection: "row",
    },
    [laptop]: {
      padding: "7.7rem 10rem",
      flexDirection: "row",
    },

    // text container
    "& > :first-child": {
      width: "auto",
      textAlign: "center",
      display: "flex",
      padding: "0 1rem",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      "& .subtitle": {
        opacity: "0.4",
        // fontSize: "1.8rem",
        fontSize: "2.25rem",
        letterSpacing: "0",
        lineHeight: "3.2rem",
        marginBottom: "2rem",
      },
      "& >:not(:last-child)": { marginBottom: "5rem" },

      [`${tablet} and (max-width: 64em)`]: {
        width: "50%",
        padding: "3rem 5rem 3rem 0",
        textAlign: "start",
        alignItems: "start",
        "& >:not(:last-child)": { marginBottom: "0rem" },
      },
      [laptop]: {
        width: "50%",
        padding: "3rem 10rem 3rem 0",
        textAlign: "start",
        alignItems: "start",
        "& >:not(:last-child)": { marginBottom: "4rem" },
        "& .subtitle": { fontSize: "1.8rem" },
      },
    },

    "& .hero-img": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [tablet]: {
        width: "50%",
      },
    },
  });

  return (
    <div className={css(rulesContainer)}>
      <div>
        {laptopScreenListener ? (
          <H1 fontSize={6} lineHeight={9}>
            Tasks
            <br />
            Book
          </H1>
        ) : (
          <H1 fontSize={5} lineHeight={7}>
            Tasks
            <br />
            Book
          </H1>
        )}
        <p className="subtitle">
          Welcome to Tasks Book! Your friendly to-do list. Explore, organize,
          and accomplish your tasks with ease. Let's get things done together!
        </p>

        {user ? (
          <>
            <CustomLink
              to="/dashboard"
              fontSize={laptopScreenListener ? 1.8 : 2.25}
            >
              <p>Go to Dashboard!</p>
              <FontAwesomeIcon icon={faTableColumns} fixedWidth pull="right" />
            </CustomLink>
          </>
        ) : (
          <>
            <CustomLink
              to="/auth/signup"
              fontSize={laptopScreenListener ? 1.8 : 2.25}
            >
              <p>Sign Up today!</p>
              <FontAwesomeIcon icon={faUserPlus} fixedWidth pull="right" />
            </CustomLink>
          </>
        )}
      </div>
      <div className="hero-img">
        <HeaderImageContainer modus={modus} />
      </div>
    </div>
  );
};

export default Header;
