import React, { useContext, useState } from "react";
import { useFela } from "react-fela";
import Label from "../../presentational/Label";
import Input from "../../presentational/Input";
import ModalGroup from "./ModalGroup";
import Button from "../../presentational/Button";
import { appContext } from "../../../context/GlobalContext";
import UploadPicture from "../../presentational/UploadPicture";
import H3 from "../../presentational/typography/H3";

const UpdateProfileModal = ({ handleCloseModal }) => {
  const { currentTheme, user, setUser, setAlertMessage } =
    useContext(appContext);
  const { css, theme } = useFela();

  const [disable, setDisable] = useState(false);

  const [updated, setUpdated] = useState({
    username: user.username,
    email: user.email,
  });

  const [avatarPreview, setAvatarPreview] = useState(user.picture);

  const disableForm = () => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 2500);
  };

  const rules = () => ({
    minWidth: "50vw",
    fontSize: "1.4rem",

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

  const handleChange = (e) => {
    setUpdated({ ...updated, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!updated.username) {
        disableForm();
        throw new Error("Update username or cancel");
      }
      if (!updated.email) {
        disableForm();
        throw new Error("Update email or cancel");
      }
      setUser({ ...updated, picture: avatarPreview });
      handleCloseModal();
    } catch (error) {
      setAlertMessage({ error });
    }
  };

  const resetAndClose = () => {
    setUpdated({
      username: user.username,
      email: user.email,
      picture: user.picture,
    });
    setAvatarPreview(user.picture);
    handleCloseModal();
  };

  return (
    <form className={css(rules)} onSubmit={handleSubmit}>
      <div>
        <UploadPicture
          avatarPreview={avatarPreview}
          setAvatarPreview={setAvatarPreview}
        />
      </div>
      <div className="info">
        <H3 color={theme.colors.blue}>Update your profile</H3>
        <ModalGroup gb={1}>
          <Label htmlFor="username">Username</Label>
          <Input
            placeholder="username"
            onChange={handleChange}
            value={updated.username}
            name="username"
          />
        </ModalGroup>
        <ModalGroup gb={1}>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="email@address.com"
            onChange={handleChange}
            type="email"
            value={updated.email}
            name="email"
          />
        </ModalGroup>

        <ModalGroup fd={"row"} gr={3} jc="flex-end">
          <Button
            width={"auto"}
            fontSize={1.6}
            bg="danger"
            type="button"
            event={resetAndClose}
            disabled={disable}
          >
            Cancel
          </Button>
          <Button
            width={"auto"}
            fontSize={1.6}
            type="submit"
            disabled={disable}
          >
            Save Changes
          </Button>
        </ModalGroup>
      </div>
    </form>
  );
};

export default UpdateProfileModal;
