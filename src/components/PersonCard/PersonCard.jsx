// styles
import classes from "./styles.module.css";

export default function PersonCard({ data }) {
  return (
    <div className={classes.root}>
      <p>{data.name}</p>
      <p>HP:{data.hp}</p>
      <img className={classes.personImg} src={data.img} alt="person" />
      <div className={classes.modules}>
        {data.modules.length < 1 ? (
          <p>нет умений</p>
        ) : (
          data.modules.map((module, i) => (
            <div key={i} className={classes.module}>
              <img
                src={module.img}
                alt="module"
                className={classes.moduleImg}
              />
              <p>{module.title}</p>
              <p>Р:{module.radius}</p>
              {module?.attack && <p>У:{module.attack}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
