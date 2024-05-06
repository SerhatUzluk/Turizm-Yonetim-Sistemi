import { configureStore } from '@reduxjs/toolkit'
import SideBar from '../components/SideBar/SideBar'
import { sideBarReducer } from './slices/SideBarSlice'
import  { campaignReducer }  from './slices/CampaignSlice'
export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,   
    campaignDetail: campaignReducer 
  },  
})

