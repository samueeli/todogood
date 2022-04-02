import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { BackToTodos } from '../../../common/BackToTodos';
import { Page } from '../../../common/Page';
import { TodoForm } from '../TodoForm/TodoForm';

export const EditTodo = (props) => {
  const params = useParams();

  return (
    <Page>
      <div style={{ color: 'var(--secondary-color)', marginTop: '-10px' }}>
        / Edit
      </div>
      <TodoForm data={props.data} selected={params.id}>
        <Button variant="outlined" color="warning">
          Delete
        </Button>
        <Button variant="outlined" color="secondary">
          Save
        </Button>
      </TodoForm>
      <BackToTodos />
    </Page>
  );
};
