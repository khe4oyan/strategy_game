// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import mapSlice from "./slices/mapSlice";
import selectedPersonSlice from './slices/selectedPersonSlice'
import selectedModuleSlice from './slices/selectedModuleSlice'

const store = configureStore({
  reducer: {
    mapSlice,
    selectedPersonSlice,
    selectedModuleSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  }
});

export default store;
