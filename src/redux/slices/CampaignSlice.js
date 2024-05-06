import { createSlice } from "@reduxjs/toolkit";

const initialState = { isClicked: false };

export const campaignSlice = createSlice({
    name: "campaignDetail",
    initialState,
    reducers: {
      openDetails: (state, actions) => {
        state.isClicked = true;
      },
      closeDetails: (state, actions) => {
        state.isClicked = false;
      },
    },
  });


export const { openDetails, closeDetails } = campaignSlice.actions;

export const campaignReducer = campaignSlice.reducer;