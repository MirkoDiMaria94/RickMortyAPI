import { createReducer } from "@reduxjs/toolkit";
import {CharacterType} from "../../models/CharacterType";
import { addList } from "./charactersActions";

type InitialState={
    list:CharacterType[]
}

const InitialState:InitialState={
    list:[]
}
export const charactersReducer=createReducer(InitialState,(builder)=>
builder
.addCase(addList,(state,action)=>{
    state.list=action.payload
    
})
)