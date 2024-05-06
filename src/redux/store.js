import { configureStore } from '@reduxjs/toolkit'
import SideBar from '../components/SideBar/SideBar'
import { sideBarReducer } from './slices/SideBarSlice'
import { expeditionReducer } from './slices/ExpeditionSlice'
import { campaignReducer } from './slices/CampaignSlice'
export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    expedition: expeditionReducer,
    campaignDetail: campaignReducer 
  },
})

