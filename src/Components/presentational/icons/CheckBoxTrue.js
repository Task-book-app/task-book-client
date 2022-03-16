import React from "react";

const CheckBoxTrue = ({ fontSize }) => {
  return (
    <svg
      width={fontSize ? `${fontSize}rem` : "1.6rem"}
      height={fontSize ? `${fontSize}rem` : "1.6rem"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#0aa7bd" />
      <g clipPath="url(#clip0_803_27)">
        <path
          d="M16.2857 5.69226L8.42855 13.3076L4.85712 9.84611"
          stroke="#0aa7bd"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_803_27">
          <rect width="15" height="9" fill="white" transform="translate(2 5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckBoxTrue;
