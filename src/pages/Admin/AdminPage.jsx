import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import AdminSideBar from "../../components/SideBar/AdminSideBar"
import HomePage from '../HomePage';
import ShiftPage from '../ShiftPage';
import CreateExpedition from '../../components/Expedition/CreateExpedition';
import UpdateExpedition from '../../components/Expedition/UpdateExpedition copy';
import VehiclesPages from '../VehiclesPages';
import SaleCancellation from '../SalesDepartment/SaleCancellation';

const AdminPage = () => {
  return (
    <div>
      <AdminSideBar/>
         <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/vardiya' element={<ShiftPage/>}/>
          <Route path='/sefer-olustur' element={<CreateExpedition/>}/>
          <Route path='/sefer-guncelle' element={<UpdateExpedition/>}/>
          <Route path='/Araclar' element={<VehiclesPages/>}/>
          <Route path='/satis-iptal' element={<SaleCancellation/>}/>
        </Routes> 
    </div>
  )
}

export default AdminPage