// libs
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// components
import PersonCard from "../../components/PersonCard";

// slices
import { addPersons } from '../../store/slices/mapSlice';

// data
import personsData from "../../data/personsData";
import routes from '../../data/routes';

// styles
import classes from './styles.module.css';

export default function PersonChoosingPage() {
  const [persons, setPersons] = useState([]);
  const { map } = useSelector(s => s.mapSlice);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const personsExamples = [];
  let iCount = useRef(0);

  // создать экземпляры всех персонажев
  for (const personData of personsData) {
    personsExamples.push(new personData());
  }

  const delPerson = (personInd) => {
    setPersons(prev => {
      const newPrev = [];
      for (const [i, elem] of prev.entries()) {
        if (i !== personInd) {
          newPrev.push(elem);
        }
      }
      --iCount.current;
      return newPrev;
    });
  };

  const addPerson = (classInd) => {
    if (iCount.current > 3) {return;}
    ++iCount.current;

    const person = new personsData[classInd](map, 0, 0);
    setPersons(prev => [person, ...prev]);
  };

  const playButton = () => {
    if (persons.length > 0) {
      dispatch(addPersons(persons));
      navigate(routes.PLAY);
    }
  };

  return (
    <div className={classes.root}>
      <button onClick={playButton}>Play</button>

      <h2>Selected Persons</h2>
      <div className={classes.selectedPersons}>
        {persons.map((person, i) => (
          <button key={i} onClick={() => {delPerson(i)}}>
            <PersonCard data={person} />
          </button>
        ))}
      </div>

      <h2>All Persons</h2>
      <div className={classes.allPersons}>
        {personsExamples.map((example, i) => (
          <button key={i} onClick={() => {addPerson(i)}}>
            <PersonCard data={example} />
          </button>
        ))}
      </div>
    </div>
  )
}
