import React from "react";
import { useFela } from "react-fela";

const rules = ({ gb, gr, fd }) => ({
  width: "100%",
  display: "flex",
  flexDirection: fd ? fd : "column",
  justifyContent: "space-between",
  "& > :not(:last-child)": {
    marginBottom: `${gb}rem`,
    marginRight: `${gr}rem`,
  },
});

const ModalGroup = ({ children, gb, gr, fd }) => {
  const { css } = useFela({ gb, gr, fd });

  return <div className={css(rules)}>{children}</div>;
};

export default ModalGroup;
