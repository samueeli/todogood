import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton } from '@mui/material';
import '../todos.css';

export const Todo = (props) => {
  let navigate = useNavigate(props.id);

  const openEdit = async (e) => {
    e.preventDefault();
    navigate(`/todo/edit/${props.id}`);
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
