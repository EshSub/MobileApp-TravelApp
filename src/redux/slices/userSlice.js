import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: { username: null, email: null, first_name: null, last_name: null},
    access: null
  },
  //actions for the user object
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
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
