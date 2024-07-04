import { createSlice } from "@reduxjs/toolkit"
import zxcvbn from "zxcvbn"

const initialState = {
    passwordValue: "",
    strength: 0
}

const PasswordSlice = createSlice({
    name: "password",
    initialState,
    reducers:{
        setPassword: (state, action) => {state.passwordValue = action.payload,
            state.strength = zxcvbn(action.payload).score * 100/4;
        },
        setStrength: (state, action) => {
            state.strength = action.payload;
        }
    }
})

export const { setPassword, setStrength } = PasswordSlice.actions;
export const passwordReducer = PasswordSlice.reducer; 