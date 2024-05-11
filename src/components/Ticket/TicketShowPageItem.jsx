import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaBusAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const TicketShowPageItem = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-center w-96 h-64 border-solid border-2 rounded-lg bg-lightBlue my-10 p-5 hover:cursor-pointer hover:bg-blue hover:text-white relative">         
            <div className="w-full flex justify-between">
              <div><FaBusAlt /></div>
              <div>sefer gerçekleşti</div>
            </div>
          
          <div className="w-full flex flex-col items-center justify-center">
              <p>Antalya Otogarı - Bursa Otogarı</p>
              <p>03 Mart 2024 Pazar-22:00</p>
          </div>

          <div className="w-full flex justify-between items-center">
                <div>
                  <p>Ad Soyad</p>
                  <p>PNR</p>
                  <span>8S2325D</span>
                </div>
                <div>
                  <p>Koltuk No</p>
                  <span>19</span>
                </div>
                <div>
                  <p>Fiyat</p>
                  <span>500 TL</span>
                </div>
          </div>

          <div className="w-full flex justify-between items-center">
            <p>Toplam Tutar:</p>
            <span>500 TL</span>
          </div>


          <div className=" absolute bottom-0  mt-4 flex justify-center items-center gap-2">
            <button onClick={() => {navigate("/bilet-puan")}} className=" text-darkBlue text-lg hover:text-lightBlue font-bold transition-all hover:scale-110">Puanla</button>
            <AiOutlineLike size={22}/>
          </div>

      </div>
  )
}

export default TicketShowPageItem