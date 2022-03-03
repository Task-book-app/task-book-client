import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Button from "../../../presentational/Button";
import { useFela } from "react-fela";
import UserTopBar from "./UserTopBar";
import ToogleDarkMode from "../../../presentational/ToogleDarkMode";

const TopBar = () => {
  const { css } = useFela();

  const rules = () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  return (
    <div className={css(rules)}>
      <Button width={"auto"} fontSize={1.6}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          transform={{ rotate: 45 }}
          fontSize={"1.6rem"}
        />
        New task
      </Button>
      <ToogleDarkMode />
      <UserTopBar />
    </div>
  );
};

export default TopBar;
