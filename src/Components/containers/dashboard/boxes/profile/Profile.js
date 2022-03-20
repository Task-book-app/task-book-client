import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";
import UploadPicture from "../../../../presentational/UploadPicture";
import ModalGroup from "../../../modal/ModalGroup";
import Label from "../../../../presentational/Label";
import Input from "../../../../presentational/Input";
import Button from "../../../../presentational/Button";

const Profile = () => {
  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    display: "flex",
    "& > :not(:last-child)": {
      marginRight: "5rem",
    },
    "& .info": {
      fontSize: "1.4rem",
      lineHeight: "1.9rem",
      letterSpacing: "0.03em",

      flex: "1 1 auto",
      "& > :not(:last-child)": {
        marginBottom: "3rem",
      },
    },
  });

  return (
    <form className={css(rules)}>
      <UploadPicture />
      <div className="info">
        <ModalGroup gb={1}>
          <Label htmlFor="username">Username</Label>
          <Input placeholder="username" />
        </ModalGroup>
        <ModalGroup gb={1}>
          <Label htmlFor="email">Email</Label>
          <Input placeholder="email@address.com" type="email" />
        </ModalGroup>

        <Button width="auto" type="button">
          Update
        </Button>
      </div>
    </form>
  );
};

export default Profile;
