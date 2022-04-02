import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import './todoForm.css';

export const TodoForm = ({ data, selected, children }) => {
  const [state, setState] = useState({
    id: selected || 'select',
    person: '',
    comment: '',
    task: '',
  });

  useEffect(() => {
    const selectedTodo = data.find((todo) => todo.id == selected);
    setState(selectedTodo);
  }, [data, selected]);

  return (
    <form className="todo-form-container my-select">
      <h2>Choose People</h2>
      <select defaultValue={!state ? 'select' : state.id}>
        <option value="select" disabled>
          Select a person
        </option>
        {data.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.person}
            </option>
          );
        })}
      </select>
      <h2>Choose Good</h2>
      <select defaultValue={!state ? 'select' : state.id}>
        <option value="select" disabled>
          Select gooood
        </option>
        {data.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.task}
            </option>
          );
        })}
      </select>
      <h2>Add Comment</h2>
      <textarea
        className="comment"
        type="text"
        placeholder="Write something..."
        defaultValue={!state ? null : state.comment}
      />
      <div className="edit-btns">{children}</div>
    </form>
  );
};
