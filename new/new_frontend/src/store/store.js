// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import userSlice from './slices/user.slice.js';
import gameSlice from './slices/game.slice.js';

const store = configureStore({
  reducer: {
    userSlice,
    gameSlice,
  }
});

export default store;