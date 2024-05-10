import React from 'react'
import { FaBus } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { MdCarRental } from "react-icons/md";

const TopLinks = () => {
  return (
        <div className=" flex gap-5">
          <button className="  bg-lightBlue  py-3 rounded-full hover:bg-darkBlue hover:text-white transition-all w-36 flex justify-center items-center gap-x-2"> <span><FaBus size={20}/></span>Otobüs</button>
          <button className="bg-lightBlue  py-3 rounded-full hover:bg-darkBlue hover:text-white transition-all w-36  flex justify-center items-center gap-x-2"><span><MdBusinessCenter size={24}/></span>Firma</button>
          <button className="bg-lightBlue  py-3 rounded-full hover:bg-darkBlue hover:text-white transition-all w-36  flex justify-center items-center gap-x-2"><span><MdCarRental size={24}/></span>Araç Kirala</button>
        </div>
  )
}

export default TopLinks