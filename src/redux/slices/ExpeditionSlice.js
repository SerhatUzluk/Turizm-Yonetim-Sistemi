import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isModal: false
}


const expeditionSlice = createSlice({
    name: "expedition",
    initialState,
    reducers: {
        modalTrue: (state, actions) => {
            state.isModal = true;
        },
        modalFalse: (state, actions) => {
            state.isModal = false;
        },
    }
});


export const {modalFalse, modalTrue} = expeditionSlice.actions;

export const expeditionReducer = expeditionSlice.reducer;