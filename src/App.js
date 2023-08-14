import "./App.css";
import { useState } from "react";
import { useAddTask, useRemoveTask } from "./custom.js";
import * as React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function AddToDo({ onClick, onChange, input }) {
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
              value={input}
              onChange={onChange}
              sx={{ width: 300 }}
            />
          </Grid>
          <Grid item md={3}>
            <Box mr={4}>
              <Button variant="contained" onClick={onClick}>
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Task({ text, id, isChecked, onClick }) {
  const labelId = `checkbox-list-label-${text}`;

  return (
    <>
      <ListItem key={id}>
        <ListItemButton onClick={() => onClick(id)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={isChecked}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
          <ListItemText sx={{ textAlign: "center" }} id={id} primary={text} />
        </ListItemButton>
      </ListItem>
    </>
  );
}

function TaskList({ tasks, toggleCheck }) {
  const taskList = tasks.map((task) => {
    return (
      <Task
        text={task.name}
        isChecked={task.isCompleted}
        id={task.id}
        onClick={toggleCheck}
      />
    );
  });

  return (
    <Box m={4}>
      <Container maxWidth="sm">
        <List>{taskList}</List>
      </Container>
    </Box>
  );
}

export default function App() {
  const { tasks, handleClick, handleChange, inputText, toggleCheck } =
    useAddTask();

  return (
    <div className="App">
      <h1>To Do App</h1>
      <AddToDo
        onClick={handleClick}
        onChange={handleChange}
        input={inputText}
      />
      <TaskList tasks={tasks} toggleCheck={toggleCheck} />
    </div>
  );
}
