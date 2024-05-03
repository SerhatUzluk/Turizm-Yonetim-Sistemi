import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import TableList from '../components/Table/TableList'
<<<<<<< HEAD
import { useDispatch } from 'react-redux'
import { modalFalse } from '../redux/slices/ExpeditionSlice'
=======
import BusTemplateType1 from '../components/BusTemplate/BusTemplateType1'
import BusTemplateType2 from '../components/BusTemplate/BusTemplateType2'
import BusTemplateType3 from '../components/BusTemplate/BusTemplateType3'
import Campaigns from '../components/Campaigns/Campaigns'
>>>>>>> c4df954687d33b8da06302b997a3db747924c173

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
<<<<<<< HEAD
          {/* <div onClick={handleClickOutSide} className='w-full h-full bg-black top-0 left-0 opacity-5 fixed'></div> */}
        </div>        
=======
          <BusTemplateType2/> 
          <BusTemplateType1/>
          <BusTemplateType3/> 
          <Campaigns/>       
        </div>
>>>>>>> c4df954687d33b8da06302b997a3db747924c173
    </div>
  )
}

export default ExpeditionPage