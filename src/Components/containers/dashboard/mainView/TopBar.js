import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Button from "../../../presentational/Button";
import { useFela } from "react-fela";
import UserTopBar from "./UserTopBar";
import ToogleDarkMode from "../../../presentational/ToogleDarkMode";
import BlurredScreen from "../../modal/BlurredScreen";

const TopBar = () => {
  const { css } = useFela();

  const [showModal, setShowModal] = useState("none");

  const rules = () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const handleShowModal = () => {
    setShowModal("block");
  };

  return (
    <div className={css(rules)}>
      <BlurredScreen showModal={showModal} setShowModal={setShowModal}>
        Modal Will Be Here
      </BlurredScreen>
      <Button width={"auto"} fontSize={1.6} event={handleShowModal}>
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
