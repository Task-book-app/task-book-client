import React from "react";
import { useFela } from "react-fela";
import CheckBox from "./CheckBox";

const rules = () => ({
  "& > :first-child": {
    marginRight: "1rem",
  },
});

const ShowHidePassword = ({ callback }) => {
  const { css } = useFela();
  return (
    <div className={css(rules)}>
      <CheckBox callback={callback} checked={false} />
      <p>Show Password</p>
    </div>
  );
};

export default ShowHidePassword;
