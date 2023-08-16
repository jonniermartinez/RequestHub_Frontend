import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./states/userSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
