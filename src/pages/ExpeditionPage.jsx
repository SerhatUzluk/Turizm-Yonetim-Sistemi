import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import TableList from '../components/Table/TableList'
import { useDispatch, useSelector } from 'react-redux'
import { modalFalse } from '../redux/slices/ExpeditionSlice'
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

      <div className=' absolute w-full  h-[800px] flex justify-center items-center '>
      {
        isModal ? (
          <div className=' z-20'>
            <ExpeditionDetail />

            <div className='  w-screen h-screen absolute top-0 left-0' onClick={handleClickOutSide}></div>
          </div>
        ) : (null)
      }
      </div>
    </div>
  )
}

export default ExpeditionPage