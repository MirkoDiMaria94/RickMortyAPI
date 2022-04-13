import { createAction } from "@reduxjs/toolkit";


export const signIn = createAction<Boolean>("login/signin");
export const signOut = createAction<Boolean>("login/signout")
