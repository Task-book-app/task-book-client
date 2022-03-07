import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../context/GlobalContext";
import Button from "../../presentational/Button";
import Input from "../../presentational/Input";
import Label from "../../presentational/Label";
import H3 from "../../presentational/typography/H3";
import ModalGroup from "./ModalGroup";
import Select from "../../presentational/Select";

const CreateTaskModal = ({ handleCloseModal }) => {
  const { css, theme } = useFela();

  const { currentTheme } = useContext(appContext);

  const rules = () => ({
    minWidth: "50vw",
    fontSize: "1.4rem",
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },
  });

  const myCategories = ["Home", "Family", "Work", "Sports"];

  return (
    <form className={css(rules)}>
      <H3 color={theme.colors.blue}>Add a new task</H3>

      <ModalGroup gb={1}>
        <Label htmlFor="task">What should be done?</Label>
        <Input
          type={"text"}
          placeholder={"Enter your task..."}
          name={"task"}
          id={"task"}
        />
      </ModalGroup>

      <ModalGroup fd={"row"} gr={3}>
        <ModalGroup gb={1}>
          <Label htmlFor={"category"}>Category</Label>
          <Select dropDownValues={myCategories} />
        </ModalGroup>
        <ModalGroup gb={1}>
          <Label htmlFor={"category"}>Category</Label>
          <Input />
        </ModalGroup>
        <ModalGroup gb={1}>
          <Label htmlFor={"priority"}>Priority</Label>
          <Select dropDownValues={myCategories} />
        </ModalGroup>
      </ModalGroup>

      <Button
        width={"auto"}
        fontSize={1.6}
        bg="danger"
        type="button"
        event={handleCloseModal}
      >
        Cancel
      </Button>
      <Button
        width={"auto"}
        fontSize={1.6}
        type="button"
        event={handleCloseModal}
      >
        Add
      </Button>
    </form>
  );
};

export default CreateTaskModal;
