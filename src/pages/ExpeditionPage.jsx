import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import TableList from '../components/Table/TableList'
import { useDispatch } from 'react-redux'
import { modalFalse } from '../redux/slices/ExpeditionSlice'

const ExpeditionPage = () => {
  const dispatch = useDispatch();

  const handleClickOutSide = () => {
    dispatch(modalFalse());
  }

  return (
    <div className=' flex p-3 gap-3 min-h-screen'>
        <div className=' flex-1'>
            <SideBar />
        </div>

        <div className=' flex-[5] z-10'>
          <TableList />
          {/* <div onClick={handleClickOutSide} className='w-full h-full bg-black top-0 left-0 opacity-5 fixed'></div> */}
        </div>        
    </div>
  )
}

export default ExpeditionPage