// components
import PersonInMap from '../PersonInMap';

// styles
import classes from './styles.module.css';

export default function MapSquare({ squareData }) {
  return (
    <div className={classes.root}>
      {
        squareData.person &&
        <PersonInMap personData={squareData.person}/>
      }
    </div>
  )
}