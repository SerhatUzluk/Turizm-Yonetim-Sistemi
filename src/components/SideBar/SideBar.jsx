import React from 'react'
import { FaChevronCircleLeft } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarTimes } from "react-icons/fa";
import { VscListFilter } from "react-icons/vsc";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronCircleRight } from "react-icons/fa";
import { sideBarClose, sideBarOpen } from '../../redux/slices/SideBarSlice';


const SideBar = () => {
  const {isSideBar} = useSelector((state) => state.sideBar);
  const dispatch = useDispatch();



  const sideBarCloseFunc = () => {
    dispatch(sideBarClose());
  }
  
  const sideBarOpenFunc = () => {
    dispatch(sideBarOpen());
  }

  return (
    // sidebar
    <>
      {
        isSideBar ? (
          <div className='relative min-h-screen bg-darkBlue bg-opacity-90 py-4 px-1 rounded-xl text-white h-1/2'>
          {/* locations */}
            <div className=' w-full mt-8 flex flex-col gap-8 border-b pb-8'>
              <div className='w-full flex items-start flex-col gap-2'>
                <span className=' flex justify-center items-center gap-2'>Kalkış Yeri <IoLocationOutline /></span>
                <div className=' text-black'>
                  <select className='w-[300px]'>
                    <option>Sehir Seçiniz..</option>
                    <option>İstanbul</option>
                    <option>Antalya</option>
                    <option>Bursa</option>
                    <option>Gaziantep</option>
                    <option>Elazığ</option>
                  </select>
                </div>
              </div>
  
              <div className='w-full flex items-start flex-col gap-2'>
              <span className=' flex justify-center items-center gap-2'>Varış Yeri <IoLocationOutline /></span>
                <div className=' text-black w-full'>
                  <select className='w-[300px]'>
                    <option>Sehir Seçiniz..</option>
                    <option>İstanbul</option>
                    <option>Antalya</option>
                    <option>Bursa</option>
                    <option>Gaziantep</option>
                    <option>Elazığ</option>
                  </select>
                </div>
              </div>
  
              <div className='w-full flex items-start flex-col gap-2'>
              <span className=' flex justify-center items-center gap-2'>Tarih <FaRegCalendarTimes /></span>
                <div className=' text-black w-full'>
                <input
                    type="date"
                    id="start" 
                    name="trip-start"
                    value="2018-07-22"
                    min="2018-01-01" max="2018-12-31" 
                    className=' w-[300px]'
                    />
                </div>
              </div>
            </div>
  
            {/* filter */}
            <div className=' mt-4'>
              <span className=' flex justify-start items-center gap-2'>Filtreler <VscListFilter /></span>
  
              <div className=' flex justify-between items-center mt-3'>
                <button className=' bg-light text-black p-2 px-3 hover:bg-lightBlue hover:text-white rounded-full'>Sabah</button>
                <button className=' bg-light text-black p-2 px-3 hover:bg-lightBlue hover:text-white rounded-full'>Öğlen</button>
                <button className=' bg-light text-black p-2 px-3 hover:bg-lightBlue hover:text-white rounded-full'>Akşam</button>
                <button className=' bg-light text-black p-2 px-3 hover:bg-lightBlue hover:text-white rounded-full'>Gece</button>
              </div>
  
              <div>
                <span className=' flex justify-start items-center gap-2 mt-4 mb-3'>Fiyata Göre Sırala</span>
                <div className=' flex justify-between items-center px-4'>
                  <div className=' flex justify-start gap-5 items-center'>
                    <span className=' w-10'>Artan</span>
                    <FaChevronUp className=' hover:scale-125 transition-all cursor-pointer'/>
                  </div>
  
                  <div className=' flex justify-start gap-5 items-center'>
                    <span className=' w-10'>Azalan</span>
                    <FaChevronDown className=' hover:scale-125 transition-all cursor-pointer'/>
                  </div>
                </div>
              </div>
            </div>
  
  
            <div className=' absolute right-1 top-1 z-10 text-lightBlue cursor-pointer transition-all hover:scale-110'>
                <FaChevronCircleLeft size={30} onClick={sideBarCloseFunc}/>
            </div>
        </div>
        ) : (
          <div>
            <div className=' absolute left-4 top-100 z-10 text-lightBlue flex justify-center items-center gap-2 '>
                <span className=' text-black'>Tüm Filtreler</span> <FaChevronCircleRight size={30} className='cursor-pointer transition-all hover:scale-110' onClick={sideBarOpenFunc}/>
            </div>
          </div>
        )
      }
     
    </>
  )
}

export default SideBar