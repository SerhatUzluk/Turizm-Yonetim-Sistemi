import { configureStore } from '@reduxjs/toolkit'
import SideBar from '../components/SideBar/SideBar'
import { sideBarReducer } from './slices/SideBarSlice'

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer
  },
})

