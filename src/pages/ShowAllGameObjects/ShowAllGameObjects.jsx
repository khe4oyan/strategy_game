// data
import personsData from "../../data/personsData";
import modulesData from "../../data/modulesData";

// styles
import classes from "./styles.module.css";

export default function ShowAllGameObjects() {
  // создать экземпляры всех модулей
  const modulesExamples = [];
  for (const key in modulesData) {
    modulesExamples.push(new modulesData[key]());
  }

  // создать экземпляры всех персонажев
  const personsExamples = [];
  for (const personData of personsData) {
    personsExamples.push(new personData());
  }

  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  return (
    <div className={classes.root}>
      <h2>All Modules</h2>
      <div className={classes.modules}>
        {modulesExamples.map((example, i) => (
          <div key={i} className={classes.module}>
            <div>
              <p className={classes.moduleTitle}>{example.title}</p>
              <img
                src={example.img}
                alt="module_img"
                className={classes.moduleImg}
              />
            </div>
            <div className={classes.moduleInfo}>
              {example.radius && (
                <p>Radius: {example.radius + randomNumber()}</p>
              )}
              {example.attack && (
                <p>Damage: {example.attack + randomNumber()}</p>
              )}
            </div>
          </div>
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
                  <img
                    key={i}
                    src={moduleData.img}
                    alt="module_image"
                    className={classes.personModuleImg}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}