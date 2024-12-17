// libs
import { useState } from "react";

// components
import Map from "./components/Map";
import PersonsSelector from "./components/PersonsSelector";

// styles
import "./app.css";

function App() {
	const mapInit = () => {
    const map = [];
    const size = 5;
    for (let i = 0; i < size; ++i) {
      const line = [];
      for (let j = 0; j < size; ++j) {
        line.push(null);
      }
      map.push(line);
    }
    return map;
  }

  const [map, setMap] = useState(mapInit());
  const [persons, setPersons] = useState([]);

  return (
    <div>
      <PersonsSelector persons={persons} setPersons={setPersons} />
      {/* <Map persons={persons} map={map} setMap={setMap} /> */}
    </div>
  );
}

export default App;
