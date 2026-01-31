import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",

  initialState: {
    userId: null,
  },

  reducers: {
    setUserId(state, { payload }) {
      state.userId = payload;
    },
  }
});

export default userSlice.reducer;
export const {
  setUserId,
} = userSlice.actions;