import React, { useContext, useEffect, useState } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import { setStateQuote } from "../../../../helpers/functions";
import H3 from "../../../presentational/typography/H3";

const FactDay = () => {
  const { currentTheme } = useContext(appContext);

  const [quote, setQuote] = useState({});

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
    },

    "& .figcaption": {
      textAlign: "end",
    },
  });

  useEffect(() => {
    setStateQuote(setQuote);
  }, []);

  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Quote of the day</H3>
      <figure className="figure">
        <blockquote className="blockquote">
          <p>“{quote.text}”</p>
        </blockquote>
        <figcaption className="figcaption">
          <b>- {!quote.author ? "anonymous" : quote.author}</b>
        </figcaption>
      </figure>
    </div>
  );
};

export default FactDay;