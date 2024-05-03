import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import TableList from '../components/Table/TableList'
import { useDispatch, useSelector } from 'react-redux'
import { modalFalse } from '../redux/slices/ExpeditionSlice'
import BusTemplateType1 from '../components/BusTemplate/BusTemplateType1'
import BusTemplateType2 from '../components/BusTemplate/BusTemplateType2'
import BusTemplateType3 from '../components/BusTemplate/BusTemplateType3'
import Campaigns from '../components/Campaigns/Campaigns'
import ExpeditionDetail from '../components/Table/ExpeditionDetail'


const ExpeditionPage = () => {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.expedition);
  

  const handleClickOutSide = () => {
    dispatch(modalFalse());
  }

  return (
    <div className=' relative flex p-3 gap-3 min-h-screen'>
        <div className=' flex-1'>
            <SideBar />
        </div>   
        <div className=' flex-[5] z-10'>
          <TableList />                
        </div>

      <div className=' absolute w-full  h-full flex justify-center items-center bg-black bg-opacity-50 '>
      {
        isModal ? (
          <div className=' z-20'>
            <ExpeditionDetail />
          </div>
        ) : (null)
      }
      </div>
    </div>
  )
}

export default ExpeditionPage