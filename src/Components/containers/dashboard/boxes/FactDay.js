import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import H3 from "../../../presentational/typography/H3";

const FactDay = () => {
  const { currentTheme, errorFetchQuote, quote } = useContext(appContext);

  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    lineHeight: "2.1rem",
    fontSize: "1.4rem",
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
    [theme.breakpoints.tablet]: {
      "& h3": { display: "block" },
    },
  });

  if (errorFetchQuote || !quote) {
    return <></>;
  } else {
    return (
      <div className={css(rules)}>
        <H3 color={theme.colors.blue}>Quote of the day</H3>
        <figure className="figure">
          <blockquote className="blockquote">
            <q>{quote.content}</q>
          </blockquote>
          <figcaption className="figcaption">
            <b>- {quote.author}</b>
          </figcaption>
        </figure>
      </div>
    );
  }
};

export default FactDay;
