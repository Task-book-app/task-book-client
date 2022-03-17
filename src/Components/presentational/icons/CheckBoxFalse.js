import React from "react";

const CheckBoxFalse = ({ fontSize }) => {
  return (
    <svg
      width={fontSize ? `${fontSize}rem` : "1.6rem"}
      height={fontSize ? `${fontSize}rem` : "1.6rem"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#0aa7bd" />
    </svg>
  );
};

export default CheckBoxFalse;
