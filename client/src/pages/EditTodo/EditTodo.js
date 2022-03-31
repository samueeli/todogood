import { Button } from '@mui/material';
import { Page } from '../../components/Page';
import './editTodos.css';

export const EditTodo = (props) => {
  return (
    <Page>
      <form className="edit-container my-select">
        <h2>Choose People</h2>
        <select defaultValue="select">
          <option value="select" disabled>
            Select a person
          </option>
          <option>Pekka</option>
          <option>Riitta</option>
          <option>Jouko</option>
        </select>
        <h2>Choose Good</h2>
        <select defaultValue="select">
          <option value="select" disabled>
            Select gooood
          </option>
          <option>Vie hänelle kahvia</option>
          <option>Vie suklaata ja kukkia</option>
          <option>Rohkaise häntä sanallisesti</option>
        </select>
        <h2>Add Comment</h2>
        <textarea
          className="comment"
          type="text"
          placeholder="Write something..."
        />
        <div className="edit-btns">
          <Button variant="outlined" color="warning">
            Delete
          </Button>
          <Button variant="outlined" color="secondary">
            Save
          </Button>
        </div>
      </form>
    </Page>
  );
};
