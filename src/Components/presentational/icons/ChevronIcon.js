import React from "react";
import { useFela } from "react-fela";

const ChevronIcon = ({ fontSize, showDropDown }) => {
  const { theme } = useFela();
  return (
    <svg
      width={fontSize ? `${fontSize}rem` : "1.6rem"}
      height={fontSize ? `${fontSize}rem` : "1.6rem"}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={showDropDown ? "1" : "0.3"}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.08748 5.33748C3.31529 5.10967 3.68463 5.10967 3.91244 5.33748L6.99996 8.425L10.0875 5.33748C10.3153 5.10967 10.6846 5.10967 10.9124 5.33748C11.1402 5.56529 11.1402 5.93463 10.9124 6.16244L7.41244 9.66244C7.18463 9.89024 6.81529 9.89024 6.58748 9.66244L3.08748 6.16244C2.85967 5.93463 2.85967 5.56529 3.08748 5.33748Z"
          fill={showDropDown ? theme.colors.blue : "currentColor"}
        />
      </g>
    </svg>
  );
};

export default ChevronIcon;
