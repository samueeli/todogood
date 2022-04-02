import { Add } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { Page } from '../../common/Page';
import { Todo } from './Todo/Todo';
import './todos.css';

export const Todos = (props) => {
  return (
    <Page>
      <div className="col-center todos-container">
        <h2>ToDos</h2>
        {props.data.map((todo, i) => (
          <Todo
            setSelected={props.setSelected}
            task={todo.task}
            person={todo.person}
            key={todo.id}
            id={todo.id}
          />
        ))}
        <NavLink to="todo/create" className="todos-add">
          <Add fontSize="inherit" />
        </NavLink>
      </div>
    </Page>
  );
};
