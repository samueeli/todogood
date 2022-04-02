import React from 'react';
import { NavLink } from 'react-router-dom';

export const BackToTodos = () => {
  return <NavLink to="/" style={style}>{`< Back to Todos`}</NavLink>;
};

const style = {
  color: 'var(--primary-color)',
  textDecoration: 'none',
};
