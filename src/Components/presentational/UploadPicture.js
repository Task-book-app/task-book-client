import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";
import Avatar from "./Avatar";

const UploadPicture = ({ avatarPreview, setAvatarPreview }) => {
  const { user } = useContext(appContext);
  const { css, theme } = useFela();

  const rules = () => ({
    textAlign: "center",
    cursor: "pointer",

    color: theme.colors.blue,
    height: "auto",
    // display: "flex",
    // flexDirection: "column",
    "& > *": {
      marginLeft: "auto",
      marginRight: "auto",
    },
    '& input[type="file"]': {
      display: "none",
    },
    "& div": {
      marginTop: "1rem",
      fontSize: "1.6rem",
      lineHeight: "1.6rem",
      letterSpacing: "0.03em",
    },
    ":hover div": {
      textDecoration: "underline",
    },
  });

  const avatarChange = (e) => {
    let fileSelected = e.target.files[0];

    if (!fileSelected) return;

    let fileReader = new FileReader();
    fileReader.readAsDataURL(fileSelected);

    fileReader.onloadend = (ev) => {
      setAvatarPreview(fileReader.result);
    };
  };

  return (
    <label htmlFor="picture-upload" className={css(rules)}>
      <input
        type="file"
        name="picture-upload"
        id="picture-upload"
        accept="image/*"
        onChange={avatarChange}
      />
      <Avatar
        width={15}
        height={15}
        picture={avatarPreview ? avatarPreview : user.picture}
      />
      <div>Change Picture</div>
    </label>
  );
};

export default UploadPicture;
