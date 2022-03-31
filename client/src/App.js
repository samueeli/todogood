import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Todos } from './pages/Todos/Todos';
import { CreateTodo } from './pages/CreateTodo/CreateTodo';
import { EditTodo } from './pages/EditTodo/EditTodo';
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
    id: 1,
  },
  { task: 'Anna hänelle suklaa rasia ja kukkia', person: 'Milla', id: 2 },
  { task: 'Rohkaise häntä sanallisesti', person: 'Kai', id: 3 },
];

// TODO lisää /todo/edit/{id} routeen
function App() {
  const id = 1;
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Todos data={data} />} />
          <Route path="/todo/create" element={<CreateTodo />} />
          <Route path="/todo/edit/:id" element={<EditTodo id={id} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
