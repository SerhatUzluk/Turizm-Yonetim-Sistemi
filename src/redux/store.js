import { configureStore } from '@reduxjs/toolkit'
import SideBar from '../components/SideBar/SideBar'
import { sideBarReducer } from './slices/SideBarSlice'
import { expeditionReducer } from './slices/ExpeditionSlice'

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    expedition: expeditionReducer
  },
})

