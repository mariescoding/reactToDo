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
    <Box m={5}>
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item md={8}>
            <TextField
              id="outlined-basic"
              label="入力"
              variant="outlined"
              size="small"
              sx={{ width: 300 }}
            />
          </Grid>
          <Grid item md={3}>
            <Box mr={4}>
              <Button variant="contained" onClick={handleClick}>
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Task({ text, isChecked }) {
  const labelId = `checkbox-list-label-${text}`;
  return (
    <>
      <ListItem key={text}>
        <ListItemButton onClick={""} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={isChecked}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
          <ListItemText
            sx={{ textAlign: "center" }}
            id={""}
            primary={"test" + text}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
}

function TaskList() {
  const { taskList, tasks } = useAddTask;
  console.log(taskList, tasks);

  // return <List sx={{ width: "100%", maxWidth: 360 }}>{taskList}</List>;
  return (
    <Box m={4}>
      <Container maxWidth="sm">
        <List>
          <Task text="" isChecked={true} />
          <Task text="" isChecked={false} />
          <Task text="" isChecked={false} />
        </List>
      </Container>
    </Box>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>To Do App</h1>
      <AddToDo />
      <TaskList />
    </div>
  );
}
