import React from "react";
import { useFela } from "react-fela";

const rules = ({ showModal }) => ({
  display: showModal,
  position: "fixed",
  width: "100vw",
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
  "& .container": {
    position: "relative",
    overflow: "auto",
    height: "100vh",
  },
});

const BlurredScreen = ({ children, showModal, fadeAnimation, onClick }) => {
  const { css } = useFela({ showModal });

  return (
    <div className={css(rules, fadeAnimation)}>
      <div className="container" onClick={onClick}>
        {children}
      </div>
    </div>
  );
};

export default BlurredScreen;
