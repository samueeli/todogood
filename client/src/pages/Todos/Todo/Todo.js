import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton } from '@mui/material';
import '../todos.css';

export const Todo = (props) => {
  const openEdit = (e) => {
    e.preventDefault();
    console.log('Samulin data:', props.id);
  };

  return (
    <>
      <div className="todo-container">
        <IconButton>
          <DeleteIcon color="warning" />
        </IconButton>
        <div className="todo-text" onClick={openEdit}>
          <div className="todo-task">{props.task}</div>
          <div className="todo-person">{props.person}</div>
        </div>
        <div>
          <Checkbox color="secondary" />
        </div>
      </div>
    </>
  );
};
