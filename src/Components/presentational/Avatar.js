import React from "react";
import { useFela } from "react-fela";

const Avatar = () => {
  const { css } = useFela();

  const rules = () => ({
    width: "4.4rem",
    height: "4.4rem",
    borderRadius: "50%",
    border: "1px solid #f0f0f0",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 32%",
    },
  });

  return (
    <div className={css(rules)}>
      <img
        src="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="perro"
      />
    </div>
  );
};

export default Avatar;
