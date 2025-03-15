// libs
import { Routes, Route } from "react-router-dom";

// pages
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import PersonChoosingPage from './pages/PersonChoosingPage';
import ShowAllGameObjects from "./pages/ShowAllGameObjects";
import NotFoundPage from './pages/NotFoundPage';

// data
import routes from './data/routes';

// styles
import "./app.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<HomePage />}/>
        <Route path={routes.PLAY} element={<PlayPage />}/>
        <Route path={routes.PERSON_CHOOSING} element={<PersonChoosingPage />}/>
        <Route path={routes.SHOW_ALL_GAME_OBJECTS} element={<ShowAllGameObjects />}/>
        <Route path={routes.NOT_FOUND} element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
