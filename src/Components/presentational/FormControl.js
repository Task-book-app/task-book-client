// import React from 'react'
import { useFela } from "react-fela";

const FormControl = ({
  children,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  marginModal,
}) => {
  const { css, theme } = useFela({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    marginModal,
  });

  const rule = ({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    marginModal,
  }) => ({
    width: "100%",
    marginTop: `${mt}rem`,
    marginBottom: `${mb}rem`,
    marginLeft: `${ml}rem`,
    marginRight: `${mr}rem`,
    margin: mx ? `0 ${mx}rem` : my ? `${my}rem 0` : `${m}rem`,
    paddingTop: `${pt}rem`,
    paddingBottom: `${pb}rem`,
    paddingLeft: `${pl}rem`,
    paddingRight: `${pr}rem`,
    padding: px ? `0 ${px}rem` : py ? `${py}rem 0` : `${p}rem`,

    "& label": {
      marginLeft: marginModal ? marginModal : "4.7rem",
      fontSize: "1.4rem",
      lineHeight: "3rem",
      // letterSpacing: '.09rem'
    },
    "& div ": {
      display: "flex",
      alignItems: "center",
    },
    "& div input": {
      marginLeft: marginModal ? marginModal : "1.9rem",
      fontFamily: "inherit",
      color: "inherit",
      // color: theme.colors.blue,
      transition: "all 0.1s",
      fontSize: "1.8rem",
      padding: "0.8rem 1.7rem",
      // padding: '2rem',
      border: "none",
      borderRadius: ".5rem",
      outline: "none",
      backgroundColor: "#80808024",
      width: "100%",
      height: "3.5rem",
      ":focus": {
        boxShadow: theme.shadows.boxShadow_1,
        outline: `2px solid ${theme.colors.blue}`,
      },
      "::placeholder": {
        // color: theme.colors.blue,
        fontSize: "1.5rem",
        fontStyle: "italic",
        fontFamily: "inherit",
      },
    },
  });

  return <div className={css(rule)}>{children}</div>;
};

export default FormControl;
