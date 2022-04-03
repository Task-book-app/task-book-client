import React, { createContext, useState } from "react";
import { useFela } from "react-fela";

export const modalContext = createContext();

export const ModalProvider = ({ children }) => {
  const { renderer } = useFela();

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
      WebkitTransform: "translate(-50%, -1000px)",
      transform: "translate(-50%, -1000px)",
      opacity: 0,
    },
    "100%": {
      WebkitTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      opacity: 1,
    },
  }));

  const slideOut = renderer.renderKeyframe(() => ({
    "0%": {
      WebkitTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      opacity: 1,
    },
    "100%": {
      WebkitTransform: "translate(-50%, -1000px)",
      transform: "translate(-50%, -1000px)",
      opacity: 0,
    },
  }));

  const sideBarIn = renderer.renderKeyframe(() => ({
    "0%": {
      WebkitTransform: "translateX(-1000px)",
      transform: "translateX(-1000px)",
      // opacity: 0,
    },
    "100%": {
      WebkitTransform: "translateX(0)",
      transform: "translateX(0)",
      // opacity: 1,
    },
  }));

  const sideBarOut = renderer.renderKeyframe(() => ({
    "0%": {
      WebkitTransform: "translateX(0)",
      transform: "translateX(0)",
      // opacity: 1,
    },
    "100%": {
      WebkitTransform: "translateX(-1000px)",
      transform: "translateX(-1000px)",
      // opacity: 0,
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

  const sideBarInRules = {
    WebkitAnimation:
      sideBarIn + " 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    animation:
      sideBarIn + " 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  };

  const sideBarOutRules = {
    WebkitAnimation:
      sideBarOut + " 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
    animation:
      sideBarOut + " 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
  };

  // state show modal
  const [showModal, setShowModal] = useState("none");

  // animation states
  const [fadeAnimation, setFadeAnimation] = useState(fadeInRules);
  const [slideAnimation, setSlideAnimation] = useState(slideInRules);
  const [sideBarAnimation, setSideBarAnimation] = useState(sideBarInRules);

  const handleShowModal = () => {
    setShowModal("block");
  };

  const handleCloseModal = () => {
    setFadeAnimation(fadeOutRules);
    setSlideAnimation(slideOutRules);
    setSideBarAnimation(sideBarOutRules);

    setTimeout(() => {
      setShowModal("none");
      setFadeAnimation(fadeInRules);
      setSlideAnimation(slideInRules);
      setSideBarAnimation(sideBarInRules);
    }, 400);
    return;
  };

  return (
    <modalContext.Provider
      value={{
        fadeAnimation,
        slideAnimation,
        sideBarAnimation,
        showModal,
        handleShowModal,
        handleCloseModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};
