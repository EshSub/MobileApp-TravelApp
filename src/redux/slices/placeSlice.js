import { createSlice } from "@reduxjs/toolkit";
import { places } from "../../helpers/data";

export const placeSlice = createSlice({
  name: "app",
  initialState: {
    places: places,
  },
  //actions for the user object
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const { setPlaces } = placeSlice.actions;

export default placeSlice.reducer;
