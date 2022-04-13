import { createReducer } from "@reduxjs/toolkit";
import { signIn,signOut } from "./login.action";

type InitialState={
    account:Boolean
}

const InitialState:InitialState={
    account:false
}
export const loginReducer=createReducer(InitialState,(builder)=>
builder
.addCase(signIn,(state,action)=>{
    state.account=action.payload
}).addCase(signOut,(state,action)=>{
    state.account=action.payload
})
)