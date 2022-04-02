import { Button } from '@mui/material';
import { BackToTodos } from '../../../common/BackToTodos';
import { Page } from '../../../common/Page';
import { TodoForm } from '../TodoForm/TodoForm';

export const CreateTodo = (props) => {
  return (
    <Page>
      <div style={{ color: 'var(--secondary-color)', marginTop: '-10px' }}>
        / Create
      </div>
      <TodoForm data={props.data}>
        <Button variant="outlined" color="secondary">
          Save
        </Button>
      </TodoForm>
      <BackToTodos />
    </Page>
  );
};
