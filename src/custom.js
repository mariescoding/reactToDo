import useState from 'react';
import Task from 'App.js'

function useAddTask({}){
    const[tasks,setTasks] = useState(Array())

    function handleClick(){
        
        const tasksCopy = tasks.slice()
        tasks.append()
        setTasks(tasksCopy)
    }
 
    const taskList = tasks.map((task) => (
        <Task
          //id={task.id}
          text={task}
          //completed={task.completed}
        />
      ));


    return {taskList, handleClick}
}

function useDoneTask(){


    return {}
}