import React from "react";
import { useFela } from "react-fela";

const ListContainer = ({ children }) => {
  const { css } = useFela();

  const rules = () => ({
    listStyle: "none",
    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },
  });

  return <ul className={css(rules)}>{children}</ul>;
};

export default ListContainer;
