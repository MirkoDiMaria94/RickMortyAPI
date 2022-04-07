import { createAction } from "@reduxjs/toolkit";
import { CharacterType } from "../../models/CharacterType";

export const addList=createAction<CharacterType[]>('charcters/addList')