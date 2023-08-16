import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = action.payload;
      state.data = data;
    },
    updateUser: (state, action) => {
      state.data = action.payload;
    },
    resetUser: () => {
      return initialState;
    },
  },
});

export const { addUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
