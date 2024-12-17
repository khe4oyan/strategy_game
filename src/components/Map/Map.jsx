// components
import MapSquare from "../MapSquare";

// styles
import classes from "./styles.module.css";

export default function Map({ map, setMap }) {
  return (
    <div className={classes.root}>
      <div className={classes.map}>
        {map.map((line, i) =>
          line.map((squareData, j) => (
            <MapSquare data={squareData} key={`${i}${j}`} />
          ))
        )}
      </div>
    </div>
  );
}
