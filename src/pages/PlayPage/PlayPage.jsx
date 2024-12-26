// components
import Map from '../../components/Map/Map';
import Modules from '../../components/Modules';

// styles
import classes from './styles.module.css';

export default function PlayPage() {
  return (
    <div className={classes.root}>
      <Map />
      <Modules />
    </div>
  )
}