// components
import PersonInMap from '../PersonInMap';

// styles
import classes from './styles.module.css';

export default function MapSquare({ data }) {
  return (
    <div className={classes.root}>
      {
        data.person &&
        <PersonInMap data={data.person}/>
      }
    </div>
  )
}