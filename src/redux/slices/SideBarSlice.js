import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSideBar: true
}

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    sideBarOpen: (state, actions) => {
        state.isSideBar = true;
    },
    sideBarClose: (state, actions) => {
        state.isSideBar = false;
    }
    
  },
})


export const { sideBarClose, sideBarOpen } = sideBarSlice.actions;

export const sideBarReducer = sideBarSlice.reducer;

