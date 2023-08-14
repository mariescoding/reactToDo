import { useState } from "react";

type Task = {
  id: number;
  name: string;
  isCompleted: boolean;
};

// type inputText: string;

export const useAddTask = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 0, name: "", isCompleted: false },
  ]);
  const [inputText, setInputText] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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

  function toggleCheck(id: number) {
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
