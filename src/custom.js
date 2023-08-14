import { useState } from "react";

export const useAddTask = () => {
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    setTasks((prevValue) => [...prevValue]);
  }

  return { tasks, handleClick };
};
