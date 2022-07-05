import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import loaderSlice from "./slices/loaderSlice";
import courseSlice from "./slices/courseSlice";
import { loadState, saveState } from "../localstorage";

const reducers = {
  loading: loaderSlice,
  profile: authSlice,
  course: courseSlice,
};

const persistStore = loadState();
export const store = configureStore({
  reducer: reducers,
  devTools: true,
  persistStore,
});
store.subscribe(() => {
  saveState(store.getState());
});
