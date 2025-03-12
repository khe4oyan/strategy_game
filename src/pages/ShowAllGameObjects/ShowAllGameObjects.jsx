// data
import personsData from "../../data/personsData";
import modulesData from "../../data/modulesData";

// styles
import classes from "./styles.module.css";

export default function ShowAllGameObjects() {
  // создать экземпляры всех модулей
  const modulesExamples = [];
  for (const key in modulesData) {
    modulesExamples.push(new modulesData[key](null, 1));
  }

  // создать экземпляры всех персонажев
  const personsExamples = [];
  for (const personData of personsData) {
    personsExamples.push(new personData());
  }

  // local component
  const ModuleExample = ({ example }) => {
    return (
      <div className={classes.module}>
        <div className={classes.moduleImgBox}>
          <p className={classes.moduleTitle}>{example.title}</p>
          <img
            src={example.img}
            alt="module_img"
            className={classes.moduleImg}
          />
        </div>
        <div className={classes.moduleInfo}>
          {example.radius && (
            <p>Radius: {example.radius}</p>
          )}
          {example.attack && (
            <p>Damage: {example.attack}</p>
          )}
          {example.cooldownConst && (
            <p>Cooldown: {example.cooldownConst}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <h2>All Modules</h2>
      <div className={classes.modules}>
        {modulesExamples.map((example, i) => (
          <ModuleExample key={i} example={example}/>
        ))}
      </div>

      <h2>All Persons</h2>
      <div className={classes.persons}>
        {personsExamples.map((example, i) => (
          <div key={i} className={classes.person}>
            <div>
              <p className={classes.personName}>{example.name}</p>
              <img
                src={example.img}
                alt="person_img"
                className={classes.personImg}
              />
            </div>
            <div className={classes.personInfo}>
              <div>
                <p>Health: {example.hp}</p>
                {/* specialData */}
              </div>
              <div className={classes.personModules}>
                {example.modules.map((moduleData, i) => (
                  <ModuleExample key={i} example={moduleData}/>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
