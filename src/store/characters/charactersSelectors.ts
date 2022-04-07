import { RootState } from "..";

export const selectCharacter = (state: RootState) => state.characters.list;
