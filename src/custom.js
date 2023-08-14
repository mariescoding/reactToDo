import useState from "react";
import Task from "./App.js";

export const useAddTask = () => {
  const [tasks, setTasks] = useState(Array(3));

  // function handleClick() {
  //   const tasksCopy = tasks.slice();
  //   tasks.append();
  //   setTasks(tasksCopy);
  //   console.log(tasksCopy);
  // }

  const tasksCopy = ["test1", "test2", "test3"];
  setTasks(tasksCopy);

  const taskList = ["test1", "test2", "test3"].map((task) => {
    return <Task text={task} />;
  });

  return { taskList, tasks };
};

const useDoneTask = () => {
  return {};
};
