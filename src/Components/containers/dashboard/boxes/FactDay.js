import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import H3 from "../../../presentational/typography/H3";

const FactDay = () => {
  const { currentTheme, errorFetchQuote, quotesArray } = useContext(appContext);

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
  console.log(quotesArray);
  const quoteElement =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];

  if (errorFetchQuote || !quoteElement) {
    return <></>;
  } else {
    return (
      <div className={css(rules)}>
        <H3 color={theme.colors.blue}>Quote of the day</H3>
        <figure className="figure">
          <blockquote className="blockquote">
            <q>{quoteElement.content}</q>
          </blockquote>
          <figcaption className="figcaption">
            <b>- {quoteElement.author}</b>
          </figcaption>
        </figure>
      </div>
    );
  }
};

export default FactDay;
