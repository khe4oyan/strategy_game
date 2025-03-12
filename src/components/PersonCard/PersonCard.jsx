// styles
import classes from "./styles.module.css";

export default function PersonCard({ data }) {
  return (
    <div className={classes.root}>
      <p>{data.name}</p>
      <p>HP:{data.hp}</p>
      <img className={classes.personImg} src={data.img} alt="person" />
      <div className={classes.modules}>
        {data.modules.map((module, i) => (
          <div key={i} className={classes.module}>
            <img src={module.img} alt="module" className={classes.moduleImg} />
            <p>{module.title}</p>
            {module?.radius && <p>R:{module.radius}</p>}
            {module?.attack && <p>A:{module.attack}</p>}
            {module?.cooldownConst && <p>CD:{module.cooldownConst}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
