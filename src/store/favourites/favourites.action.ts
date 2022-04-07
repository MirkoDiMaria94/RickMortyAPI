import { createAction } from "@reduxjs/toolkit";


export const add = createAction<number>("favourites/add");
export const remove = createAction<number>("favourites/remove");
export const clear = createAction("favourites/clear");