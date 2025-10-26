// config
import Socket from '../../config/socket';

// styles
import classes from './styles.module.css';

export default function SelectPersons({ closePersonsMenu, persons, selectedPersonsState }) {
  const [selectedPersons, setSelectedPersons] = selectedPersonsState;

  const removeSelectedPerson = (ind) => {
    setSelectedPersons(prev => prev.filter((_, index) => index !== ind));
  }

  const addPersons = (ind) => {
    if (selectedPersons.length === 4) {
      console.log("no more than 4 persons");
      return;
    }

    setSelectedPersons(prev => [...prev, ind])
  }

  const onPlay = () => {
    Socket.emit("play", JSON.stringify(selectedPersons));
    closePersonsMenu();
  }

  return (
    <div className={classes.root}>
      <div>
        {
          persons.map((personData, ind) =>
            <button key={ind}
              onClick={() => addPersons(ind)}
            >
              {personData.name} (HP: {personData.hp})
            </button>
          )
        }
      </div>

      <div className={classes.selectedPersonsContainer}>
        <p>Persons {selectedPersons.length}/4</p>
        <div className={classes.selectedPersons}>
          {
            selectedPersons.map((personsInd, ind) =>
              <div key={ind} className={classes.selectedPersonCard}>
                <p>{persons[personsInd].name}</p>
                <p>HP: {persons[personsInd].hp}</p>
                <button onClick={() => removeSelectedPerson(ind)}>x</button>
              </div>
            )
          }
        </div>
      </div>


      <button onClick={onPlay}>play</button>
    </div>
  )
}