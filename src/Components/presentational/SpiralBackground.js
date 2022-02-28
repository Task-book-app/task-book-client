// import React from 'react'
import logo from "../../images/spiral/logo-spiral.svg";
import { useFela } from "react-fela";

const SpiralBackground = ({ styles, width = "100%" }) => {
  const { css } = useFela({ width });

  const rules = ({ width }) => ({
    width,
    ...styles,
    zIndex: "0",
  });

  return <img src={logo} alt="spiral" className={css(rules)} />;
};

export default SpiralBackground;
