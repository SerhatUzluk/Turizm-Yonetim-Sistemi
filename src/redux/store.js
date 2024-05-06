import { configureStore } from '@reduxjs/toolkit'
import SideBar from '../components/SideBar/SideBar'
import { sideBarReducer } from './slices/SideBarSlice'
<<<<<<< HEAD
<<<<<<< HEAD
import { expeditionReducer } from './slices/ExpeditionSlice'
import { campaignReducer } from './slices/CampaignSlice'
export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    expedition: expeditionReducer,
    campaignDetail: campaignReducer 
=======

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
=======

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
  },
})

