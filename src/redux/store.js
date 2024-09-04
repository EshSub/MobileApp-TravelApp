import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import appReducer from "./slices/appSlice";
import placeReducer from "./slices/placeSlice";
import formStateReducer from "./slices/formStateSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { USER_LOGOUT } from "../helpers/constants";
import { useIsAuthenticated } from "../hooks/auth";

const persistConfig = {
  key: 'root',
  storage,
}

const contentReducer = combineReducers(({
  auth: userReducer, 
  app: appReducer, 
  place: placeReducer,
  formState: formStateReducer
}))

const rootReducer = (state, action) => {
  if (action.type == USER_LOGOUT){
    return contentReducer(undefined, action)
  }
  return contentReducer(state, action)
} 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)
