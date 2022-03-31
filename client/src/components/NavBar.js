import React from 'react';
import logo from '../assets/images/todogood_logo.png';

export const NavBar = () => {
  return (
    <div style={style}>
      <img src={logo} style={{ height: '40%' }} alt="todogood logo" />
      <div>
        <div style={burger}></div>
        <div style={burger}></div>
        <div style={burger}></div>
      </div>
    </div>
  );
};

const style = {
  position: 'fixed',
  width: '100vw',
  height: '4rem',
  top: '0',
  left: '0',
  borderBottom: '2px solid var(--primary-color)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  boxShadow: '0 0 5px gray',
  backgroundColor: 'white',
};

const burger = {
  width: '2rem',
  height: '4px',
  backgroundColor: 'var(--secondary-color)',
  margin: '5px 0',
};
