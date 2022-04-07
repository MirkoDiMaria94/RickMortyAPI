import { createReducer } from "@reduxjs/toolkit";
import { STATUS_CODES } from "http";
import { CharacterType } from "../../models/CharacterType";
import { add, remove, clear } from "./favourites.action";

type InitialState = {
  favoritesList: CharacterType[];
};

const InitialState: InitialState = {
  favoritesList: [],
};

export const favouritesReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(add, (state, action) => {
      state.favoritesList.push(action.payload);
    })
    .addCase(remove, (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        (character) => character.id !== action.payload
      );
    });
});
