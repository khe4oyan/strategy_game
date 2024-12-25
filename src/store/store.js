// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import mapSlice from "./slices/mapSlice";

const store = configureStore({
  reducer: {
    mapSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  }
});

export default store;
