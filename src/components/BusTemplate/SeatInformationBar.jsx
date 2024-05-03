import React from 'react'
import '../Style/SeatInformationBarStyle.css'
function SeatInformationBar() {
  return (
    <>
        <div className="seatInformation font-bold font-gemunu">
        <div>
        <div className="seatPart info">
          <div className="blueSeat"></div>
          <div className="back"></div>
        </div>
        <p>Dolu Koltuk - Erkek</p>
        </div>
        <div>
        <div className="seatPart info">
          <div className="pinkSeat"></div>
          <div className="back"></div>
          </div>
          <p>Dolu Koltuk - Kadın</p>

        </div>
        <div>
        <div className="seatPart info">
          <div className="yellowSeat"></div>
          <div className="back"></div>
        </div>
        <p>Seçilen Koltuk</p>
        </div>
        <div className="">
        <div className="seatPart info">
          <div className="seat"></div>
          <div className="back"></div>
        </div>
        <p>Boş Koltuk</p>
        </div>
      </div>
    </>
  )
}

export default SeatInformationBar