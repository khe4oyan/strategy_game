// styles
import classes from './styles.module.css';

export default function Cell({ data, i, j, onCellClick }) {
  const onClick = () => {
    onCellClick(i, j);
  }

  return (
    <div className={classes.root} onClick={onClick} >
      {data?.person && <p>{data?.person?.name}</p>}
    </div>
  )
}