import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useFela } from "react-fela";
import H1 from "../../presentational/typography/H1";

const LoadingPage = ({ currentTheme, text }) => {
  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.darkModusBoxes(currentTheme),
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    color: theme.colors.blue,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    "& > :not(:last-child)": {
      marginBottom: "6rem",
    },
  });

  return (
    <div className={css(rules)}>
      <H1 fontSize={4}>{text}</H1>
      <div>
        <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fa-5x" />
      </div>
    </div>
  );
};

export default LoadingPage;
