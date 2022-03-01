import React, { useState } from "react";
import { useFela } from "react-fela";
import Avatar from "../../../presentational/Avatar";
import ToogleDropDown from "../../../presentational/ToogleDropDown";
import H4 from "../../../presentational/typography/H4";
import DropDown from "../DropDown";

const rules = () => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& > :not(:first-child)": {
    marginLeft: "2rem",
  },
});

const UserTopBar = () => {
  const { css } = useFela();

  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={css(rules)}>
      <H4>Habid</H4>
      <Avatar />
      <ToogleDropDown
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
      {showDropDown && <DropDown />}
    </div>
  );
};

export default UserTopBar;
