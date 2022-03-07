import React from "react";
import { useFela } from "react-fela";

const rules = ({ gb, gr, fd, jc }) => ({
  width: "100%",
  display: "flex",
  flexDirection: fd ? fd : "column",
  justifyContent: jc,
  "& > :not(:last-child)": {
    marginBottom: `${gb}rem`,
    marginRight: `${gr}rem`,
  },
});

const ModalGroup = ({ children, gb, gr, fd, jc }) => {
  const { css } = useFela({ gb, gr, fd, jc });

  return <div className={css(rules)}>{children}</div>;
};

export default ModalGroup;
