import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import appReducer from "./slices/appSlice";
import placeReducer from "./slices/placeSlice";

export default configureStore({
  reducer: {
    auth: userReducer,
    app: appReducer,
    place: placeReducer,
  },
});
