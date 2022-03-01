import React from "react";
import { useFela } from "react-fela";
import ListContainer from "../ListContainer";
import ListItem from "../../../presentational/ListItem";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogOut = () => {
  const { css } = useFela();

  const rules = () => ({
    width: "auto",
    flex: "1 1  auto",
    display: "flex",
    alignItems: "flex-end",
  });

  return (
    <div className={css(rules)}>
      <ListContainer marginBottom={3}>
        <ListItem title="Log Out" fontIcon={faRightFromBracket} hover="red" />
      </ListContainer>
    </div>
  );
};

export default LogOut;
