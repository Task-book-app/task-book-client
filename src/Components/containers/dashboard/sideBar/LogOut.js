import React from "react";
import { useFela } from "react-fela";
import ListContainer from "../ListContainer";
import ButtonMenu from "../../../presentational/ButtonMenu";
import LogOutIcon from "../../../presentational/icons/LogOutIcon";

const LogOut = () => {
  const { css, theme } = useFela();

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
          fontSize={1.6}
          title="Log Out"
          event={null}
          hoverColor={theme.colors.danger}
          switchOffBg={true}
        >
          <LogOutIcon />
        </ButtonMenu>
      </ListContainer>
    </div>
  );
};

export default LogOut;
