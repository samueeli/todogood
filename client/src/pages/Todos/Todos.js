import { Add } from '@mui/icons-material';
import { Page } from '../../components/Page';
import { Todo } from './Todo/Todo';
import './todos.css';

export const Todos = (props) => {
  return (
    <Page>
      <div className="col-center todos-container">
        <h2>ToDos</h2>
        {props.data.map((todo, i) => (
          <Todo
            task={todo.task}
            person={todo.person}
            key={todo.id}
            id={todo.id}
          />
        ))}
        <button className="todos-add">
          <Add fontSize="inherit" />
        </button>
      </div>
    </Page>
  );
};
