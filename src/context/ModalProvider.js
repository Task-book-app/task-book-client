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

  // state show modal
  const [showModal, setShowModal] = useState("none");

  // animation states
  const [fadeAnimation, setFadeAnimation] = useState(fadeInRules);
  const [slideAnimation, setSlideAnimation] = useState(slideInRules);

  const handleShowModal = () => {
    setShowModal("flex");
  };

  const handleCloseModal = () => {
    setFadeAnimation(fadeOutRules);
    setSlideAnimation(slideOutRules);

    setTimeout(() => {
      setShowModal("none");
      setFadeAnimation(fadeInRules);
      setSlideAnimation(slideInRules);
    }, 400);
    return;
  };

  return (
    <modalContext.Provider
      value={{
        fadeAnimation,
        slideAnimation,
        showModal,
        setShowModal,
        handleShowModal,
        handleCloseModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};
