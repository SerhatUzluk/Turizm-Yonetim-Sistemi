import React from 'react'
import '../Style/SeatInformationBarStyle.css'
function SeatInformationBar({onRemove}) {  
  return (
    <>
        <div className="flex font-bold font-gemunu border-4 border-gray-400 rounded divide-x mt-2">
        <div className='w-[80px]'>
        <div className="seatPart info">
          <div className="blueSeat bg-blue ml-4"></div>
          <div className="back"></div>
        </div>
        <p className='ml-1'>Erkek - Dolu</p>
        </div>
        <div className='w-[80px]'>
        <div className="seatPart info">
          <div className="pinkSeat bg-pink ml-4"></div>
          <div className="back"></div>
          </div>
          <p className='ml-1'>Kadın - Dolu</p>

        </div>
        <div className='w-[80px]'>
        <div className="seatPart info">
          <div className="yellowSeat bg-yellow ml-4"></div>
          <div className="back"></div>
        </div>
        <p className='ml-4'>Seçilen</p>
        </div>
        <div className="w-[80px]">
        <div className="seatPart info">
          <div className="seat ml-4"></div>
          <div className="back"></div>
        </div>
        <p className='ml-6'>Boş</p>
        
        </div>
      

      </div>

      
    </>
  )
}

export default SeatInformationBar
