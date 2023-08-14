import { useState } from "react";

export const useAddTask = () => {
  const [tasks, setTasks] = useState(Array(3));

  // function handleClick() {
  //   const tasksCopy = tasks.slice();
  //   tasks.append();
  //   setTasks(tasksCopy);
  //   console.log(tasksCopy);
  // }

  return { tasks, handleClick };
};
