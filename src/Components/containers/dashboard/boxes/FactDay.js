import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import H3 from "../../../presentational/typography/H3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons/faCircleNotch";

const FactDay = () => {
  const {
    currentTheme,
    // errorFetchQuote,
    quote,
  } = useContext(appContext);

  const {
    css,
    theme: {
      boxesGeneral,
      darkModusBoxes,
      colors: { blue },
      breakpoints: { tablet },
    },
  } = useFela();

  const rules = () => ({
    ...boxesGeneral,
    ...darkModusBoxes(currentTheme),
    lineHeight: "2.1rem",
    fontSize: "1.8rem",
    letterSpacing: "0.02em",

    display: "flex",
    flexDirection: "column",

    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },

    "& .figure": {
      "& > :not(:last-child)": {
        marginBottom: ".8rem",
      },
    },

    "& .blockquote": {
      fontStyle: "italic",
      whiteSpace: "break-spaces",
      textAlign: "center",
    },

    "& .figcaption": {
      textAlign: "end",
    },
    "& h3": { display: "none" },
    [tablet]: {
      "& h3": { display: "block" },
    },
  });

  return (
    <div className={css(rules)}>
      <H3 color={blue}>Quote of the day</H3>

      {!quote ? (
        <>
          <FontAwesomeIcon
            color={blue}
            icon={faCircleNotch}
            className="fa-spin fa-2x"
          />
        </>
      ) : (
        <figure className="figure">
          <blockquote className="blockquote">
            <q>{quote.content}</q>
          </blockquote>
          <figcaption className="figcaption">
            <b>- {quote.author}</b>
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default FactDay;
