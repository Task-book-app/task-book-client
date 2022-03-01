import React from "react";
import { useFela } from "react-fela";

const ListContainer = ({ children, marginBottom }) => {
  const { css } = useFela({ marginBottom });

  const rules = ({ marginBottom }) => ({
    width: "100%",
    listStyle: "none",
    "& > :not(:last-child)": {
      marginBottom: `${marginBottom}rem`,
    },
  });

  return <ul className={css(rules)}>{children}</ul>;
};

export default ListContainer;
