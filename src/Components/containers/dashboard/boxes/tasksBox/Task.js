import React, { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import TaskContent from "./TaskContent";
import { appContext } from "../../../../../context/GlobalContext";

const COMPLETED_TASK = gql`
  mutation CompletedTask($id: ID!, $completed: Boolean!) {
    completedTask(id: $id, completed: $completed) {
      id
      completed
    }
  }
`;

const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $task: String!) {
    updateTask(id: $id, task: $task) {
      id
      task
    }
  }
`;

const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
      task
      completed
      category
    }
  }
`;

const Task = ({ id, checked, task }) => {
  const { tasks, setTasks, setAlertMessage } = useContext(appContext);

  const [disableCheckBox, setDisableCheckBox] = useState(false);
  const [showClass, setShowClass] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  const [completeTask, completeResult] = useMutation(COMPLETED_TASK, {
    onCompleted: (data) => {
      const { id, completed } = data.completedTask;
      const updateTask = tasks.find((item) => item.id === id);
      updateTask.completed = completed;
      const updatedDB = tasks.map((item) =>
        item.id === updateTask.id ? updateTask : item
      );
      updateData(updatedDB);
    },
    onError: (error) => {
      console.error(error);
      setAlertMessage({ error });
    },
  });

  const [updateMutationTask] = useMutation(UPDATE_TASK, {
    onError: (error) => {
      console.error(error);
      setAlertMessage({ error });
    },
  });

  const [deleteMutationTask, deleteResult] = useMutation(DELETE_TASK, {
    onCompleted: (data) => {
      updateData(data.deleteTask);
    },
    // refetchQueries: [{ query: TASKS_LIST }],
    onError: (error) => {
      console.error(error);
      setAlertMessage({ error });
    },
  });

  const updateData = (data) => {
    setDisableCheckBox(true);
    setShowClass(false);
    setTransitionClass("opacity .4s ease-out");
    setTimeout(() => {
      setTasks(data);
    }, 600);
  };

  return (
    <>
      <TaskContent
        id={id}
        checked={checked}
        task={task}
        disableCheckBox={disableCheckBox}
        showClass={showClass}
        setShowClass={setShowClass}
        transitionClass={transitionClass}
        setTransitionClass={setTransitionClass}
        completeTask={completeTask}
        completeResult={completeResult}
        deleteMutationTask={deleteMutationTask}
        deleteResult={deleteResult}
        updateMutationTask={updateMutationTask}
        updateData={updateData}
      />
    </>
  );
};

export default Task;
