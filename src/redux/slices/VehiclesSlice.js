import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    vehicles:[],
};

const vehiclesSlice = createSlice({
    name:"vehicles",
    initialState,
    reducers:{
        addVehicle:(state,action)=>{
            state.vehicles.push(action.payload);
        },
        removeVehicle:(state,action)=>{
            state.vehicles = state.vehicles.filter((_,index) => index !== action.payload);
        },
    },
});

export const {addVehicle, removeVehicle} = vehiclesSlice.actions;

export const vehicleSlice = vehiclesSlice.reducer;