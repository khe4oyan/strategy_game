// libs
import { createSlice } from "@reduxjs/toolkit";

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

const mapSlice = createSlice({
  name: "mapSlice",
  
  initialState: {
    map: mapInit(),
  },

  reducers: {
    addPersons(state, action) {
      
    },
  },
});

export const { addPersons } = mapSlice.actions;
export default mapSlice.reducer;
