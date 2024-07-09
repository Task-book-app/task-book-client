import React from "react";
import { useFela } from "react-fela";
import ListContainer from "../ListContainer";
import ButtonMenu from "../../../presentational/ButtonMenu";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import Icon from "../../../presentational/Icon";

const LogOut = ({ onClick = null }) => {
  const {
    css,
    theme: {
      colors: { danger },
    },
  } = useFela();

  const rules = () => ({
    width: "auto",
    flex: "1 1  auto",
    display: "flex",
    alignItems: "flex-end",
  });

  return (
    <div className={css(rules)}>
      <ListContainer marginBottom={3}>
        <ButtonMenu
          fontSize={1.8}
          title="Log Out"
          event={onClick}
          hoverColor={danger}
          switchOffBg={true}
        >
          <Icon fontIcon={faRightFromBracket} />
        </ButtonMenu>
      </ListContainer>
    </div>
  );
};

export default LogOut;
