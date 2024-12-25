// libs
import { createSlice } from "@reduxjs/toolkit";

// for tests
import ManPerson from '../../gameObjects/classes/persons/ManPerson';
import JellyfishPerson from '../../gameObjects/classes/persons/JellyfishPerson';
import RockPerson from '../../gameObjects/classes/persons/RockPerson';

const mapInit = () => {
  const map = [];
  const size = 8;
  for (let i = 0; i < size; ++i) {
    const line = [];
    for (let j = 0; j < size; ++j) {
      line.push({
        i, 
        j,
        person: null,
      });
    }
    map.push(line);
  }

  // TESTS ZONE
  map[0][0].person = new ManPerson(map, 0, 0);
  map[1][0].person = new JellyfishPerson(map, 1, 0);
  map[4][0].person = new RockPerson(map, 4, 0);
  // END TESTS ZONE
  
  return map;
};

const mapSlice = createSlice({
  name: "mapSlice",
  
  initialState: {
    map: mapInit(),
  },

  reducers: {
    addPersons(state, action) {
      const persons = action.payload;

      for (let i = 0; i < persons.length; ++i) {
        persons[i].i = i;
        state.map[i][0].person = persons[i];
      }
    },
  },
});

export const { addPersons } = mapSlice.actions;
export default mapSlice.reducer;
