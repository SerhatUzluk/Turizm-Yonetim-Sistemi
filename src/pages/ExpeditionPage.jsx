import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import TableList from '../components/Table/TableList'

const ExpeditionPage = () => {
  return (
    <div className=' flex p-3 gap-3 '>
        <div className=' flex-1'>
            <SideBar />
        </div>

        <div className=' flex-[5]'>
          <TableList />
        </div>
    </div>
  )
}

export default ExpeditionPage