// libs
import { Link } from 'react-router-dom';

// routes
import routes from '../../data/routes';

// styles
import classes from './styles.module.css';

export default function HomePage() {
  return (
    <div className={classes.root}>
      <div>
        <Link to={routes.PERSON_CHOOSING}>Person Choose</Link>
      </div>
      
      <div>
        <Link to={routes.SHOW_ALL_GAME_OBJECTS}>Show All Game Objects</Link>
      </div>
    </div>
  )
}