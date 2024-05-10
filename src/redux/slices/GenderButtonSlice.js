import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Open: false
}

const GenderButtonSlice = createSlice({
    name: "genderButton",
    initialState,
    reducers:{
        isOpen: (state, actions) => {
            state.Open = !state.Open
        }       
    }
})

export const {isOpen} = GenderButtonSlice.actions;

export const genderButtonReducer = GenderButtonSlice.reducer;