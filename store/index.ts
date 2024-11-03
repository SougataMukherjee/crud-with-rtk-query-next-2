import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice"; // Make sure this matches your export in apiSlice.ts

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export { store };
