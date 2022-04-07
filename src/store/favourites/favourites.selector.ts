import { RootState } from "..";

export const selectFavourites = (state: RootState) =>
  state.favorites.favoritesList;
