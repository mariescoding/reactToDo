import './App.css';
import useState from 'react';
import {useAddTask} from './custom.js';
import * as React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const label = { inputProps: { '': 'Checkbox demo' } };
const theme = {
  spacing: 8,
}


function AddToDo(){

  const {handleClick} = useAddTask;

  return (
    <Container maxWidth="sm">
      <Grid container spacing={1}>
      <Grid item md={8}>
        <TextField id="outlined-basic" label="入力" variant="outlined" size="small"/>
      </Grid>
      <Grid item md={3}>
        <Box sx={{mr:2}}>
          <Button variant="contained" onClick={handleClick}>Add</Button>

        </Box>
        
      </Grid>

    </Grid>
    </Container>
    
      
  )
}

function Task({text,isChecked }){


  return (
    <li className='task'>
  
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
      <br></br>
      <AddToDo />
      <TaskList/>

    </div>

  )

}
