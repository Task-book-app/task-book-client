import React from "react";
import { useFela } from "react-fela";

const Avatar = ({ width = 4.4, height = 4.4, picture }) => {
  const { css, theme } = useFela();

  const rules = () => ({
    // display: "inline-block",
    width: `${width}rem`,
    height: `${height}rem`,
    borderRadius: "50%",
    border: "1px solid " + theme.colors.blue,
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 30%",
    },
  });

  return (
    <div className={css(rules)}>
      <img
        src={
          picture
            ? picture
            : "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        }
        alt="user"
      />
    </div>
  );
};

export default Avatar;
