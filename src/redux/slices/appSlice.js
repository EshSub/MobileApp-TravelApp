import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isMainDrawerOpen: null,
    introDone: true,
  },
  //actions for the user object
  reducers: {
    setMainDrawerOpen: (state, action) => {
      state.isMainDrawerOpen = action.payload;
    },
    setIntroDone: (state, action) => {
      state.introDone = action.payload;
    },
  },
});

export const { setMainDrawerOpen } = appSlice.actions;

export default appSlice.reducer;
