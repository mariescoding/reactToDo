import { useState } from "react";

export const useAddTask = () => {
  const [tasks, setTasks] = useState([
    { id: null, name: null, isCompleted: null },
  ]);
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleClick() {
    if (inputText === "") {
      alert("Field is blank!");
    } else {
      setTasks((prevValue) => [
        ...prevValue,
        { id: prevValue.length + 1, name: inputText, isCompleted: false },
      ]);
    }
  }

  function toggleCheck(id) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    });
  }

  return { tasks, handleClick, handleChange, inputText, toggleCheck };
};
