import './App.css';
import useState from 'react';
import {useAddTask} from './custom.js';
import * as React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const label = { inputProps: { '': 'Checkbox demo' } };

function AddToDo(){

  const {handleClick} = useAddTask;

  return (
    <div className="addBar"> 
    <TextField id="outlined-basic" label="入力" variant="outlined" className="addText"/>
    <Button variant="contained" onClick={handleClick}>Add</Button>
    </div>
  )
}

function Task({text,isChecked }){


  return (
    <li className='taskaa'>
  
    <Checkbox {...label} checked={isChecked}/>
    <p>{text}</p>
    </li>
   
  )
}

function TaskList(){

  const {taskList} = useAddTask;

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
