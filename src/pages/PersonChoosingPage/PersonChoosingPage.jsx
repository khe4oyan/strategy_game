// libs
import { useRef, useState } from "react";

// components
import PersonCard from "../../components/PersonCard";

// data
import personsData from "../../data/personsData";

// styles
import classes from './styles.module.css';

export default function PersonChoosingPage({map}) {
  const [persons, setPersons] = useState([]);
  
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
    if (iCount.current > 7) {return;}

    const person = new personsData[classInd](map, iCount.current++, 0);
    setPersons(prev => [person, ...prev]);
  };

  return (
    <div className={classes.root}>
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