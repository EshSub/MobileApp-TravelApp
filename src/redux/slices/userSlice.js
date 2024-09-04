import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    access: "null",
  },
  //actions for the user object
  reducers: {
    login: (state, action) => {
      console.log({action})
      state.user = action.payload.username;
      state.access = action.payload.access;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectAccessToken = (state) => state.auth.access;

export default userSlice.reducer;
