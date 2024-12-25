import { createSlice } from "@reduxjs/toolkit";

const selectedPersonSlice = createSlice({
  name: "selectedPersonSlice",

  initialState: {
    personIsSelected: false,
    personI: -1,
    personJ: -1,
  },
  
  reducers: {
    personSelect(state, action) {},
    personDeselect(state, action) {}
  }
});

export const {personSelect, personDeselect} = selectedPersonSlice.actions;
export default selectedPersonSlice.reducer;