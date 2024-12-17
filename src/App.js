// libs
import { useEffect } from "react";
import { useState } from "react";

// components
import Map from "./components/Map";
import PersonsSelector from "./components/PersonsSelector";

// styles
import "./app.css";

const mapInit = () => {
  const map = [];
  const size = 8;
  for (let i = 0; i < size; ++i) {
    const line = [];
    for (let j = 0; j < size; ++j) {
      line.push(null);
    }
    map.push(line);
  }
  return map;
};

function App() {
  const [isMapShow, setIsMapShow] = useState(false);
  const [map, setMap] = useState(mapInit());
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    if (isMapShow === false) {
      return;
    }

    setMap(() => {
      const newMap = mapInit();

      for (const person of persons) {
        const { i, j } = person;
        newMap[i][j] = person;
      }

      return newMap;
    });
  }, [isMapShow]);

  return (
    <div>
      {!isMapShow && (
        <div>
          <button onClick={() => setIsMapShow((prev) => !prev)}>TOGGLE</button>
        </div>
      )}
      {isMapShow ? (
        <Map map={map} setMap={setMap} />
      ) : (
        <PersonsSelector map={map} persons={persons} setPersons={setPersons} />
      )}
    </div>
  );
}

export default App;
