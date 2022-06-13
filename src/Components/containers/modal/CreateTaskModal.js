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
import { today } from "../../../helpers/functions";
import { v4 as uuidv4 } from "uuid";
import { gql } from "@apollo/client";

const NEW_TASK = gql`
mutation NewTask($task: String!, $category: String!, $date: String!, $priority:Int!)
createTask(task: $task, category: $category, date: $date, priority:$priority){
  task
  id
}
`;

const CreateTaskModal = ({ handleCloseModal }) => {
  const { css, theme } = useFela();

  const { setAlertMessage, tasks, setTasks, currentTheme } =
    useContext(appContext);

  const rules = () => ({
    minWidth: "90vw",
    fontSize: "1.4rem",

    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },

    [theme.breakpoints.laptop]: {
      minWidth: "50vw",
    },

    "& .inputs-row": {
      display: "none",
      [theme.breakpoints.tablet]: {
        display: "block",
      },
    },
    "& .inputs-column": {
      display: "block",
      [theme.breakpoints.tablet]: {
        display: "none",
      },
    },
  });

  const myCategories = ["Home", "Family", "Work", "Sports"];
  const myPriorities = [
    "1 Very important!",
    "2 Important",
    "3 Medium",
    "4 Not so important",
  ];

  const [disable, setDisable] = useState(false);

  const disableForm = () => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 2500);
  };
  // select states
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(null);

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
    try {
      const data = {
        ...formValues,
        category: category.toLowerCase(),
        priority: Number(priority[0]),
        completed: false,
        id: uuidv4(),
      };

      if (!data.task) {
        disableForm();
        throw new Error("Please enter a task");
      }

      if (!data.category) {
        disableForm();
        throw new Error("Please select a category");
      }
      if (!data.priority) {
        disableForm();
        throw new Error("Please select a priority");
      }

      // console.log(data);
      setTasks([...tasks, data]);

      setCategory("");
      setPriority("");
      setFormValues({
        task: "",
        date: today(),
      });
      handleCloseModal();
    } catch (error) {
      setAlertMessage({ error });
    }
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

      <div className="inputs-row">
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
      </div>
      <div className="inputs-column">
        <ModalGroup fd={"column"} gb={1}>
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
      </div>

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
        <Button width={"auto"} fontSize={1.6} type="submit" disabled={disable}>
          Add
        </Button>
      </ModalGroup>
    </form>
  );
};

export default CreateTaskModal;
