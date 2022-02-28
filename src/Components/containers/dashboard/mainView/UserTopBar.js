import React from "react";
import { useFela } from "react-fela";
import Avatar from "../../../presentational/Avatar";
import ToogleDropDown from "../../../presentational/ToogleDropDown";
import H4 from "../../../presentational/typography/H4";

const UserTopBar = () => {
  const { css } = useFela();

  const rules = () => ({
    display: "flex",
    alignItems: "center",
    "& > :not(:last-child)": {
      marginRight: "2rem",
    },
  });

  return (
    <div className={css(rules)}>
      <H4>Habid</H4>
      <Avatar />
      <ToogleDropDown />
    </div>
  );
};

export default UserTopBar;
