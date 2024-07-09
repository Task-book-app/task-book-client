import React, { useContext, useState } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../context/GlobalContext";
import Button from "../../presentational/Button";
import Input from "../../presentational/Input";
import Label from "../../presentational/Label";
import H3 from "../../presentational/typography/H3";
import ModalGroup from "./ModalGroup";
import Select from "../../presentational/Select";
// import DatePicker from "../../presentational/DatePicker";
// import { today } from "../../../helpers/functions";
import { gql, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const NEW_TASK = gql`
  mutation NewTask(
    $task: String!
    $category: String!
    $priority: Int!
    $completed: Boolean!
  ) {
    createTask(
      task: $task
      category: $category
      priority: $priority
      completed: $completed
    ) {
      id
      task
      category
      priority
      completed
    }
  }
`;

const CreateTaskModal = ({ handleCloseModal }) => {
  const {
    css,
    theme: {
      boxesGeneral,
      darkModusBoxes,
      breakpoints: { tablet, laptop },
      colors: { blue },
    },
  } = useFela();

  const { setAlertMessage, tasks, setTasks, currentTheme } =
    useContext(appContext);

  const [createNewTask, { loading }] = useMutation(NEW_TASK, {
    onCompleted: (data) => {
      setTasks([...tasks, data.createTask]);

      setCategory("");
      setPriority("");
      setFormValues({
        task: "",
        // date: today(),
      });
      handleCloseModal();
    },
    onError: (error) => {
      console.error("Error register", error);
      setAlertMessage({ error });
    },
  });

  const rules = () => ({
    minWidth: "95vw",
    fontSize: "1.8rem",

    ...boxesGeneral,
    ...darkModusBoxes(currentTheme),
    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },

    [laptop]: {
      minWidth: "50vw",
    },

    "& .inputs-row": {
      display: "none",
      [tablet]: {
        display: "block",
      },
    },
    "& .inputs-column": {
      display: "block",
      [tablet]: {
        display: "none",
      },
    },
  });

  const myCategories = ["Housework", "Family", "Work", "Sports"];
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
  const [priority, setPriority] = useState("");

  // date and task states
  const [formValues, setFormValues] = useState({
    task: "",
    // date: today(),
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
        category,
        priority: Number(priority[0]),
        completed: false,
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
      // setTasks([...tasks, data]);
      createNewTask({
        variables: {
          task: formValues.task,
          // date: formValues.date,
          category: category.toLowerCase(),
          priority: data.priority,
          completed: false,
        },
      });
    } catch (error) {
      setAlertMessage({ error });
    }
  };

  const resetAndClose = () => {
    setCategory("");
    setPriority("");
    setFormValues({
      task: "",
      // date: today(),
    });
    handleCloseModal();
  };

  return (
    <form className={css(rules)} onSubmit={handleSubmit}>
      <H3 color={blue}>Add a new task</H3>

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

      {/* <ModalGroup gb={1}>
        <Label htmlFor={"category"}>Category</Label>
        <Select
          dropDownValues={myCategories}
          onChange={handleChange}
          value={category}
          setValue={setCategory}
        />
      </ModalGroup> */}

      <div className="inputs-row">
        <ModalGroup fd={"row"} gr={3}>
          {/* <ModalGroup gb={1}>
            <Label htmlFor={"date"}>When?</Label>
            <DatePicker
              value={formValues.date}
              name={"date"}
              id={"date"}
              onChange={handleChange}
            />
          </ModalGroup>{" "} */}
          <ModalGroup gb={1}>
            <Label htmlFor={"category"}>Category</Label>
            <Select
              id={"category"}
              dropDownValues={myCategories}
              onChange={handleChange}
              value={category}
              setValue={setCategory}
            />
          </ModalGroup>
          <ModalGroup gb={1}>
            <Label htmlFor={"priority"}>Priority</Label>
            <Select
              id={"priority"}
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

          {/* <ModalGroup gb={1}>
            <Label htmlFor={"date"}>When?</Label>
            <DatePicker
              value={formValues.date}
              name={"date"}
              id={"date"}
              onChange={handleChange}
            />
          </ModalGroup>  */}

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
          fontSize={1.8}
          bg="danger"
          type="button"
          event={resetAndClose}
          disabled={disable}
        >
          Cancel
        </Button>
        <Button width={"auto"} fontSize={1.8} type="submit" disabled={disable}>
          {loading ? (
            <FontAwesomeIcon
              style={{
                margin: "auto",
              }}
              icon={faCircleNotch}
              className="fa-spin fa-1x"
            />
          ) : (
            "Add"
          )}
        </Button>
      </ModalGroup>
    </form>
  );
};

export default CreateTaskModal;
