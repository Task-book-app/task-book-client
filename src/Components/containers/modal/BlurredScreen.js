import React, { useState } from "react";
import { useFela } from "react-fela";

const rules = ({ showModal }) => ({
  display: showModal,
  position: "fixed",
  width: "100%",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: 10000,

  filter: "drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.2))",

  "@supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))":
    {
      WebkitBackdropFilter: "blur(10px)",
      backdropFilter: "blur(10px)",
      background: "rgba(0, 0, 0, 0.3)",
    },
});

const BlurredScreen = ({ children, showModal, setShowModal }) => {
  const { css, renderer } = useFela({ showModal });

  // key-frames
  const fadeIn = renderer.renderKeyframe(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));

  const fadeOut = renderer.renderKeyframe(() => ({
    from: { opacity: 1 },
    to: { opacity: 0 },
  }));

  const fadeInRules = {
    WebkitAnimation: fadeIn + " 0.4s ease-in-out",
    animation: fadeIn + " 0.4s ease-in-out",
  };

  const fadeOutRules = {
    WebkitAnimation: fadeOut + " 0.4s ease-in-out",
    animation: fadeOut + " 0.4s ease-in-out",
  };

  const [animation, setAnimation] = useState(fadeInRules);

  const handleCloseModal = async () => {
    setAnimation(fadeOutRules);
    await new Promise((r) => setTimeout(r, 400));
    setShowModal("none");
    setAnimation(fadeInRules);

    return;
  };

  return (
    <div className={css(rules, animation)} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default BlurredScreen;
