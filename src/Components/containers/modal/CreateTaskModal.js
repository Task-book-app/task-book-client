import React, { useContext, useState } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../context/GlobalContext";
import Button from "../../presentational/Button";
import Input from "../../presentational/Input";
import Label from "../../presentational/Label";
import H3 from "../../presentational/typography/H3";
import ModalGroup from "./ModalGroup";
import Select from "../../presentational/Select";
import DatePicker from "../../presentational/DatePicker";
import { today } from "../../helpers/functions";

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
  const myPriorities = [
    "Very important!",
    "Important",
    "Medium",
    "Not so important",
  ];

  // select states
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  // date and task states
  const [formValues, setFormValues] = useState({
    task: "",
    date: today(),
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formValues, category, priority };
    console.log(data);

    setCategory("");
    setPriority("");
    setFormValues({
      task: "",
      date: today(),
    });
    handleCloseModal();
  };

  const resetAndClose = () => {
    setCategory("");
    setPriority("");
    setFormValues({
      task: "",
      date: today(),
    });
    handleCloseModal();
  };

  // console.log(formValues);

  return (
    <form className={css(rules)} onSubmit={handleSubmit}>
      <H3 color={theme.colors.blue}>Add a new task</H3>

      <ModalGroup gb={1}>
        <Label htmlFor="task">What should be done?</Label>
        <Input
          type={"text"}
          placeholder={"Enter your task..."}
          name={"task"}
          id={"task"}
          onChange={handleChange}
          value={formValues.task}
        />
      </ModalGroup>

      <ModalGroup fd={"row"} gr={3}>
        <ModalGroup gb={1}>
          <Label htmlFor={"category"}>Category</Label>
          <Select
            dropDownValues={myCategories}
            onChange={handleChange}
            value={category}
            setValue={setCategory}
          />
        </ModalGroup>

        <ModalGroup gb={1}>
          <Label htmlFor={"date"}>When?</Label>
          <DatePicker
            value={formValues.date}
            name={"date"}
            id={"date"}
            onChange={handleChange}
          />
        </ModalGroup>

        <ModalGroup gb={1}>
          <Label htmlFor={"priority"}>Priority</Label>
          <Select
            dropDownValues={myPriorities}
            onChange={handleChange}
            value={priority}
            setValue={setPriority}
          />
        </ModalGroup>
      </ModalGroup>

      <ModalGroup fd={"row"} gr={3} jc="flex-end">
        <Button
          width={"auto"}
          fontSize={1.6}
          bg="danger"
          type="button"
          event={resetAndClose}
        >
          Cancel
        </Button>
        <Button width={"auto"} fontSize={1.6} type="submit">
          Add
        </Button>
      </ModalGroup>
    </form>
  );
};

export default CreateTaskModal;
