import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import TableList from '../components/Table/TableList'
import BusTemplateType1 from '../components/BusTemplate/BusTemplateType1'
import BusTemplateType2 from '../components/BusTemplate/BusTemplateType2'
import BusTemplateType3 from '../components/BusTemplate/BusTemplateType3'
import Campaigns from '../components/Campaigns/Campaigns'

const ExpeditionPage = () => {
  return (
    <div className=' flex p-3 gap-3 '>
        <div className=' flex-1'>
            <SideBar />
        </div>

        <div className=' flex-[5]'>
          <TableList />
          <BusTemplateType2/> 
          <BusTemplateType1/>
          <BusTemplateType3/> 
          <Campaigns/>       
        </div>
    </div>
  )
}

export default ExpeditionPage