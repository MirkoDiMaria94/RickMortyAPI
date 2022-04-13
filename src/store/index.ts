import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./characters/charactersReducers";
import { favouritesReducer } from "./favourites/favourites.reducer";
import { loginReducer } from "./login/login.reducer";


export const store = configureStore({
  //reducer: rootReducer,
  reducer: {
    characters: charactersReducer,
    favorites: favouritesReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
