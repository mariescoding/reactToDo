import { useState } from "react";

export const useAddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleClick() {
    if (inputText === "") {
      alert("Field is blank!");
    } else {
      setTasks((prevValue) => [...prevValue, inputText]);
    }
  }

  return { tasks, handleClick, handleChange, inputText };
};
