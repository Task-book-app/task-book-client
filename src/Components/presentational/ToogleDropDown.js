import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useFela } from "react-fela";

const ToogleDropDown = () => {
  const { css, theme } = useFela();

  const rules = () => ({
    color: theme.colors.blue,
    width: "2.4rem",
    height: "2.4rem",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",

    backgroundColor: theme.colors.whiteBg,

    ...theme.centerFlex,

    ...theme.buttonStyles,
  });

  return (
    <div className={css(rules)}>
      <FontAwesomeIcon icon={faChevronDown} fontSize={"1.6rem"} />
    </div>
  );
};

export default ToogleDropDown;
