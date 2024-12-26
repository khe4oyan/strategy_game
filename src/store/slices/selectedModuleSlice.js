import { createSlice } from "@reduxjs/toolkit";

const selectedModuleSlice = createSlice({
  name: "selectedModuleSlice",

  initialState: {
    selectedModuleInd: -1,
  },

  reducers: {
    moduelIndSelect(state, action) {
      state.selectedModuleInd = action.payload;
    },

    moduleIndDeselect(state) {
      state.selectedModuleInd = -1;
    }
  }
});

export const { moduelIndSelect, moduleIndDeselect } = selectedModuleSlice.actions;
export default selectedModuleSlice.reducer;