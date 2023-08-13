import './App.css';
import React from 'react';
import useState from 'react';
import {useAddTask} from '/custom.js'

function AddToDo(){
  const {taskList, handleClick} = useAddTask;
  
  return (
    <div className="addBar"> 
    <input
          type="text" 
          className="addText"
         // value={name}
         // onChange={}
        />
    <button className="addButton" onClick={}>Add</button>
    </div>
  )
}
function Task({text,isChecked }){


  return (
    <li className='task'>
  

    <input
     // id={}
      type="checkbox"
      name="inputNames"
     checked={isChecked}
      //onChange={onChange}
     // value={value}
    />
    <p>{text}</p>
    </li>
   
  )
}

function TaskList(){

  const {taskList, handleClick} = useAddTask;

  return (
    <ul className="">
      
      {taskList}

    </ul>
  )
}



export default function App(){


  return (
    <div className='App'>
      <h1>To Do App</h1>
      <AddToDo />
      <TaskList/>

    </div>

  )

}
