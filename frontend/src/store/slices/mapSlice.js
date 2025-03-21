// libs
import { createSlice } from "@reduxjs/toolkit";

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
        isActiveSquare: false,
      });
    }

    map.push(line);
  }

  return map;
};

const mapSlice = createSlice({
  name: "mapSlice",
  
  initialState: {
    map: mapInit(),
  },

  reducers: {
    updateMap(state, action) {
      const {moduleUse, args } = action.payload;
      moduleUse(state.map, args);
    }, 

    showActiveSquares(state, action) {
      action.payload(state.map);
    },

    deactiveAllActiveSquares(state) {
      for (let i = 0; i < state.map.length; ++i) {
        for (let j = 0; j < state.map[i].length; ++j) {
          state.map[i][j].isActiveSquare = false;
        }
      }
    },

    addPersons(state, action) {
      const persons = action.payload;

      for (let i = 0; i < persons.length; ++i) {
        persons[i].i = i + 2;
        state.map[i + 2][0].person = persons[i];
      }
    },

    updateMapAfterMove(state) {
      for (let i = 0; i < state.map.length; ++i) {
        for (let j = 0; j < state.map[i].length; ++j) {
          if (state.map[i][j].person !== null) {
            state.map[i][j].person.afterMove();
          }
        }
      }
    }
  },
});

export const { updateMap, showActiveSquares, deactiveAllActiveSquares, addPersons, updateMapAfterMove } = mapSlice.actions;
export default mapSlice.reducer;
