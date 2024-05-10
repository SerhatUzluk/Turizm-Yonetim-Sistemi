import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false
}

const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        login: (state) => { 
            state.isLogin = true
        },
        logout : (state) => {
            state.logout = false
        } 
    }
})

export const {login, logout} = LoginSlice.actions;

export const loginReducer = LoginSlice.reducer;