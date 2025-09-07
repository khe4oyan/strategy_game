// libs
import { Link } from 'react-router-dom';

// routes
import routes from '../../data/routes';

// styles
import classes from './styles.module.css';

export default function HomePage() {
  return (
    <div className={classes.root}>
      <h1>Version 0.2.1</h1>

      <div>
        <Link to={routes.PERSON_CHOOSING}>Person Choose</Link>
      </div>

      <div>
        <Link to={routes.SHOW_ALL_GAME_OBJECTS}>Show All Game Objects</Link>
      </div>

      <p>
        (new version coming soon..)<br />
        <a
          href="https://t.me/+TO_lh7siwX1iNzYy"
          className={classes.subscribe}
          target='_blank'
        >
          Subscribe on Telegram
        </a>
        <Link
          to={routes.UPDATE_PLANS}
          className={classes.subscribe}
        >
          See update plans
        </Link>
      </p>
    </div>
  )
}