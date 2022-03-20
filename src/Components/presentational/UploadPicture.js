import React from "react";
import { useFela } from "react-fela";
import Avatar from "./Avatar";

const UploadPicture = () => {
  const { css, theme } = useFela();

  const rules = () => ({
    textAlign: "center",
    cursor: "pointer",
    color: theme.colors.blue,
    '& input[type="file"]': {
      display: "none",
    },
    "& div": {
      marginTop: "1rem",
      fontSize: "1.2rem",
      lineHeight: "1.6rem",
      letterSpacing: "0.03em",
    },
    ":hover div": {
      textDecoration: "underline",
    },
  });

  return (
    <label htmlFor="picture-upload" className={css(rules)}>
      <input type="file" name="picture-upload" id="picture-upload" disabled />
      <Avatar width={15} height={15} />
      <div>Change Picture</div>
    </label>
  );
};

export default UploadPicture;
