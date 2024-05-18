import { configureStore } from '@reduxjs/toolkit'
import SideBar from '../components/SideBar/SideBar'
import { sideBarReducer } from './slices/SideBarSlice'
import { expeditionReducer } from './slices/ExpeditionSlice'
import { campaignReducer } from './slices/CampaignSlice'
import { loginReducer } from './slices/LoginSlice'
import { genderButtonReducer } from './slices/GenderButtonSlice'
import { vehicleSlice } from './slices/VehiclesSlice.js'
export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    expedition: expeditionReducer,
    campaignDetail: campaignReducer, 
    login: loginReducer,
    genderButton: genderButtonReducer,
    vehicles:vehicleSlice
  },
})

