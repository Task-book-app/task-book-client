import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../context/GlobalContext";
import Button from "../../presentational/Button";
import FormControl from "../../presentational/FormControl";
import H3 from "../../presentational/typography/H3";

const CreateTaskModal = ({ handleCloseModal }) => {
  const { css, theme } = useFela();

  const { currentTheme } = useContext(appContext);

  const rules = () => ({
    width: "50vw",
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    "& > :not(:last-child)": {
      marginBottom: "3rem",
    },
  });
  return (
    <form className={css(rules)}>
      <H3 color={theme.colors.blue}>Add a new task</H3>
      <FormControl marginModal={"0rem"}>
        <label htmlFor="task">What should be done?</label>
        <div>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter your task"
          />
        </div>
      </FormControl>

      <FormControl marginModal={"0rem"}>
        <label htmlFor="task">What should be done?</label>
        <div>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter your task"
          />
        </div>
      </FormControl>
      <FormControl marginModal={"0rem"}>
        <label htmlFor="category">Categorie</label>
        <div>
          <select name="category" id="category">
            <option>--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
      </FormControl>
      <FormControl marginModal={"0rem"}>
        <Button width={"auto"} type="button" event={handleCloseModal}>
          Cancel
        </Button>
        <Button width={"auto"} type="button" event={handleCloseModal}>
          Save as Template
        </Button>
        <Button width={"auto"} type="button" event={handleCloseModal}>
          Add
        </Button>
      </FormControl>
    </form>
  );
};

export default CreateTaskModal;
