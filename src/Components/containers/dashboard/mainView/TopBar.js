import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Button from "../../../presentational/Button";
import { useFela } from "react-fela";
import UserTopBar from "./UserTopBar";
import ToogleDarkMode from "../../../presentational/ToogleDarkMode";
import BlurredScreen from "../../modal/BlurredScreen";
import ModalSlide from "../../modal/ModalSlide";
import H1 from "../../../presentational/typography/H1";

const rules = () => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TopBar = () => {
  const { css, renderer } = useFela();

  // key-frames
  const fadeIn = renderer.renderKeyframe(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));

  const fadeOut = renderer.renderKeyframe(() => ({
    from: { opacity: 1 },
    to: { opacity: 0 },
  }));

  const slideIn = renderer.renderKeyframe(() => ({
    "0%": {
      WebkitTransform: "translateY(-1000px)",
      transform: "translateY(-1000px)",
      opacity: 0,
    },
    "100%": {
      WebkitTransform: "translateY(0)",
      transform: "translateY(0)",
      opacity: 1,
    },
  }));

  const slideOut = renderer.renderKeyframe(() => ({
    "0%": {
      WebkitTransform: "translateY(0)",
      transform: "translateY(0)",
      opacity: 1,
    },
    "100%": {
      WebkitTransform: "translateY(-1000px)",
      transform: "translateY(-1000px)",
      opacity: 0,
    },
  }));

  // classes
  const fadeInRules = {
    WebkitAnimation: fadeIn + " 0.4s ease-in-out",
    animation: fadeIn + " 0.4s ease-in-out",
  };

  const fadeOutRules = {
    WebkitAnimation: fadeOut + " 0.4s ease-in-out",
    animation: fadeOut + " 0.4s ease-in-out",
  };

  const slideInRules = {
    WebkitAnimation:
      slideIn + " 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    animation: slideIn + " 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  };

  const slideOutRules = {
    WebkitAnimation:
      slideOut + " 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
    animation: slideOut + " 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
  };

  const [showModal, setShowModal] = useState("none");

  const [fadeAnimation, setFadeAnimation] = useState(fadeInRules);
  const [slideAnimation, setSlideAnimation] = useState(slideInRules);

  const handleCloseModal = async () => {
    setFadeAnimation(fadeOutRules);
    setSlideAnimation(slideOutRules);
    await new Promise((r) => setTimeout(r, 400));
    setShowModal("none");
    setFadeAnimation(fadeInRules);
    setSlideAnimation(slideInRules);
    return;
  };

  const handleShowModal = () => {
    setShowModal("flex");
  };

  return (
    <div className={css(rules)}>
      <BlurredScreen
        showModal={showModal}
        fadeAnimation={fadeAnimation}
        event={handleCloseModal}
      >
        <ModalSlide slideAnimation={slideAnimation}>
          <H1>Hello Modal</H1>
        </ModalSlide>
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
