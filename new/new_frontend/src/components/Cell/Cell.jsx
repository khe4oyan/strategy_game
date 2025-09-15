// config
import Socket from '../../config/socket';


// styles
import classes from './styles.module.css';

export default function Cell({ data, i, j }) {
  return (
    <div className={classes.root}>
      {data?.person && <p>{data?.person?.name}</p>}
    </div>
  )
}