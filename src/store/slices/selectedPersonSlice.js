import { createSlice } from "@reduxjs/toolkit";

const selectedPersonSlice = createSlice({
  name: "selectedPersonSlice",
  
  initialState: {
    personIsSelected: false,
    personI: -1,
    personJ: -1,
  },
  
  reducers: {
    personSelect(state, action) {
      state.personI = action.payload.i;
      state.personJ = action.payload.j;
      state.personIsSelected = true;
    },
    personDeselect(state) {
      state.personI = -1;
      state.personJ = -1;
      state.personIsSelected = false;
    }
  }
});

export const { personSelect, personDeselect } = selectedPersonSlice.actions;
export default selectedPersonSlice.reducer;