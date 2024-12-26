// img
import deadImg from "../../assets/persons/RIP.png";

// styles
import classes from "./styles.module.css";

export default function PersonInMap({ personData }) {
  const hpPrcent = (personData.hp * 100) / personData._maxhp;
  const healStyles = {
    background: `linear-gradient(90deg, rgb(22, 236, 22) ${hpPrcent}%, rgb(153, 153, 153) 0%)`,
  };

  return (
    <div className={`${classes.root}`}>
      {personData.isDead ? (
        <>
          <img src={deadImg} alt="dead_person" className={classes.deadImg} />
          <img
            src={personData.img}
            alt="person"
            className={classes.deadPersonImg}
          />
        </>
      ) : (
        <>
          <div className={classes.heal} style={healStyles}></div>
          <img src={personData.img} alt="person" className={classes.img} />
        </>
      )}
    </div>
  );
}
