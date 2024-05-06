import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import TableList from '../components/Table/TableList'
<<<<<<< HEAD
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import { modalFalse } from '../redux/slices/ExpeditionSlice'
import ExpeditionDetail from '../components/Table/ExpeditionDetail'
import CampaignsPage from '../components/Campaigns/CampaignsPage'
=======
=======
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
import BusTemplateType1 from '../components/BusTemplate/BusTemplateType1'
import BusTemplateType2 from '../components/BusTemplate/BusTemplateType2'
import BusTemplateType3 from '../components/BusTemplate/BusTemplateType3'
import Campaigns from '../components/Campaigns/Campaigns'
<<<<<<< HEAD
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
=======
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")

const ExpeditionPage = () => {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.expedition);
  

  const handleClickOutSide = () => {
    dispatch(modalFalse());
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className=' relative flex p-3 gap-3 min-h-screen z-0'>
        <div className=' flex-1'>
            <SideBar />
        </div>   
        <div className=' flex-[5] z-10'>
        <CampaignsPage />
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
=======
=======
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
    <div className=' flex p-3 gap-3 '>
        <div className=' flex-1'>
            <SideBar />
        </div>
<<<<<<< HEAD

        <div className=' flex-[5]'>
          <TableList />                
        </div>
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
    </div>
  )
}

=======

        <div className=' flex-[5]'>
          <TableList />                
        </div>
    </div>
  )
}

>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
export default ExpeditionPage