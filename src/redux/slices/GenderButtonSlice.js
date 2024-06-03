import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Open: false
}

const GenderButtonSlice = createSlice({
    name: "genderButton",
    initialState,
    reducers:{
        isOpen: (state, actions) => {
            state.Open = true
        },
        close: (state, actions) => {
            state.Open = false
        }       
    }
})

export const {isOpen, close} = GenderButtonSlice.actions;

export const genderButtonReducer = GenderButtonSlice.reducer;