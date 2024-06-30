import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../../context/GlobalContext";
import ModalGroup from "../../../modal/ModalGroup";
import Label from "../../../../presentational/Label";
import Input from "../../../../presentational/Input";
import Button from "../../../../presentational/Button";
import Avatar from "../../../../presentational/Avatar";
import { modalContext } from "../../../../../context/ModalProvider";
import Modal from "../../../modal/Modal";
import UpdateProfileModal from "../../../modal/UpdateProfileModal";
import ModalSlide from "../../../modal/ModalSlide";

const Profile = () => {
  const { user } = useContext(appContext);
  const { handleShowModal, handleCloseModal, slideAnimation } =
    useContext(modalContext);

  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > :not(:last-child)": {
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: "2rem",
    },

    [theme.breakpoints.mobile_L]: {
      flexDirection: "row",
      "& > :not(:last-child)": {
        marginRight: "5rem",
        marginBottom: "0",
      },
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

  if (!user) return <></>;

  return (
    <>
      <Modal>
        <ModalSlide slideAnimation={slideAnimation}>
          <UpdateProfileModal handleCloseModal={handleCloseModal} />
        </ModalSlide>
      </Modal>
      <div className={css(rules)}>
        <Avatar width={15} height={15} picture={user.picture} />

        <div className="info">
          <ModalGroup gb={1}>
            <Label htmlFor="username">Username</Label>
            <Input
              placeholder="username"
              value={user.username}
              disabled={true}
            />
          </ModalGroup>
          <ModalGroup gb={1}>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="email@address.com"
              type="email"
              value={user.email}
              disabled={true}
            />
          </ModalGroup>

          <Button type="button" event={handleShowModal}>
            Update profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
