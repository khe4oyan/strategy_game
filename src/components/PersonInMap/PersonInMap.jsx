// styles
import classes from './styles.module.css';

export default function PersonInMap({ data }) {

  const hpPrcent = (data.hp * 100) / data._maxhp;
  const healStyles = {
    background: `linear-gradient(90deg, rgb(22, 236, 22) ${hpPrcent}%, rgb(153, 153, 153) 0%)`,
  }

  // TODO
  // if not selected - select person position

  return (
    <button className={`${classes.root} ${!data.isDead && classes.isDead}`}>
      <div className={classes.heal} style={healStyles}></div>
      <img src={data.img} alt="person" className={classes.img}/>
    </button>
  )
}