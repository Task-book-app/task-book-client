import React from "react";

const CalendarIcon = ({ fontSize }) => {
  return (
    <svg
      width={fontSize ? `${fontSize}rem` : "1.6rem"}
      height={fontSize ? `${fontSize}rem` : "1.6rem"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 3.5625C3.23223 3.5625 2.8125 3.98223 2.8125 4.5V15C2.8125 15.5178 3.23223 15.9375 3.75 15.9375H14.25C14.7678 15.9375 15.1875 15.5178 15.1875 15V4.5C15.1875 3.98223 14.7678 3.5625 14.25 3.5625H3.75ZM1.6875 4.5C1.6875 3.36091 2.61091 2.4375 3.75 2.4375H14.25C15.3891 2.4375 16.3125 3.36091 16.3125 4.5V15C16.3125 16.1391 15.3891 17.0625 14.25 17.0625H3.75C2.61091 17.0625 1.6875 16.1391 1.6875 15V4.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.9375C12.3107 0.9375 12.5625 1.18934 12.5625 1.5V4.5C12.5625 4.81066 12.3107 5.0625 12 5.0625C11.6893 5.0625 11.4375 4.81066 11.4375 4.5V1.5C11.4375 1.18934 11.6893 0.9375 12 0.9375Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0.9375C6.31066 0.9375 6.5625 1.18934 6.5625 1.5V4.5C6.5625 4.81066 6.31066 5.0625 6 5.0625C5.68934 5.0625 5.4375 4.81066 5.4375 4.5V1.5C5.4375 1.18934 5.68934 0.9375 6 0.9375Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.6875 7.5C1.6875 7.18934 1.93934 6.9375 2.25 6.9375H15.75C16.0607 6.9375 16.3125 7.18934 16.3125 7.5C16.3125 7.81066 16.0607 8.0625 15.75 8.0625H2.25C1.93934 8.0625 1.6875 7.81066 1.6875 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CalendarIcon;
