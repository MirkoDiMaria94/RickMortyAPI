import { createAction } from "@reduxjs/toolkit";
import { CharacterType } from "../../models/CharacterType";

export const add = createAction<CharacterType>("favourites/add");
export const remove = createAction<number>("favourites/remove");
export const clear = createAction("favourites/clear");

/*const veraAzione=(type:string, payload:any)=>{
    return {
        type,
        payload
    }
}*/

//vero reducer

/**
 *
 * const reducer (state , veraAzione){
 * switch(veraAzione.type):
 *  case 1:
 *      return {
 *          ...state,veraAzione.payload
 * }
 * }
 */
