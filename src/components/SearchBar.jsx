import React from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import "../assets/images/custom.css"
function SearchBar() {
  return (
    <>
        <div className='bg-lightBlue relative lg:rounded-b-full '>            
            <div className='lg:flex justify-around items-center p-6'>
                <div className='grid'><label htmlFor="departing-time" className='font-bold text-lg mb-1 text-darkBlue'>Kalkış Zamanı</label><input className='lg:w-[195px] rounded-lg' type="date" /></div>
                <div className='grid'><label htmlFor="departing-location" className='font-bold text-lg mb-1 text-darkBlue'>Kalkış Yeri</label><select className='lg:w-[195px] rounded-lg' name="departing-location" id="departing-location"></select></div>
                <div className='grid'><label htmlFor="arriving-location" className='font-bold text-lg mb-1 text-darkBlue'>Varış Yeri</label><select className='lg:w-[195px] rounded-lg' name="arriving-location" id="arriving-location"></select></div>
                <button className='bg-darkBlue text-white p-3 rounded-3xl absolute  lg:right-[45%] lg:top-[55px] custom-route-btn'><FaArrowRightArrowLeft /></button>
                <button className='custom-search-btn flex items-center bg-darkBlue text-white rounded-lg px-5 py-3 font-bold text-xl mt-4 sm:w-full lg:w-[100px] justify-center'>Ara <FaSearch className='ml-2' /></button>
            </div>            
        </div>
    </>
  )
}

export default SearchBar