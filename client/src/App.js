import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Todos } from './pages/Todos/Todos';
import { CreateTodo } from './pages/Todos/CreateTodo/CreateTodo';
import { EditTodo } from './pages/Todos/EditTodo/EditTodo';
//import { Splash } from './pages/Splash/Splash';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#29b6f6',
    },
    secondary: {
      main: '#66bb6a',
    },
  },
});

const data = [
  {
    task: 'Vie hänet kahville Vihreään Vuoheen Vie hänet kahville Vihreään Vuoheen',
    person: 'Petri',
    comment: 'Tämä on Petrin kommentti',
    id: 1,
  },
  {
    task: 'Anna hänelle suklaa rasia ja kukkia',
    person: 'Milla',
    comment: 'Tämä on Millan kommentti',
    id: 2,
  },
  {
    task: 'Rohkaise häntä sanallisesti',
    person: 'Kai',
    comment: 'Tämä on Kain kommentti',
    id: 3,
  },
];

// TODO lisää logiikka niin, että todos päivittyy kun edit/create componentissa painetaan "SAVE"
// TODO lisää logiikka niin, että todos päivittyy kun edit/Todos componentissa painetaan "DELETE/Trash"
// TODO lisää logiikka niin, että todos päivittyy kun Todos componentissa painetaan "checkbox.checked === true"

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Todos data={todos} />} />
          <Route path="/todo/create" element={<CreateTodo data={todos} />} />
          <Route path="/todo/edit/:id" element={<EditTodo data={todos} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
