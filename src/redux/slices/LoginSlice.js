import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    token: null,
    refreshToken: null
}

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        logout : (state) => {
            state.isLogin = false,
            state.token = null
        },
        setToken: (state, action) => {
            state.token = action.payload,            
            state.isLogin = true
        },
        setRefreshToken: (state, action) => {
            state.token = action.payload
        }
    }, 
})

export const {logout, setToken, setRefreshToken} = LoginSlice.actions;
export const loginReducer = LoginSlice.reducer;