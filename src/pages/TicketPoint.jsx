import React, { useState } from 'react'
import { FaBusAlt } from "react-icons/fa";
import { FaTicketSimple } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


const TicketPoint = () => {
    const [konfor, setKonfor] = useState(0);
    const [hizmet, setHizmet] = useState(0);
    const [servis, setServis] = useState(0);

  return (
    <div className=' flex justify-center flex-col'>
        <div className=' flex flex-col justify-center items-center gap-2 border-b-2 bg-light py-8 w-1/2 mx-auto rounded-xl shadow-xl mt-4'>
            <h2 className=' font-bold font-gemunu text-3xl '>Yolculuğunu Değerlendir</h2>
            <p>Yorumların bizim için önemli...</p>
        </div>

        <div className=' border h-[300px] mt-8 bg-darkBlue w-2/3 mx-auto text-white rounded-xl shadow-xl flex  '>
            <div className=' flex-[2] border-r border p-4'>
                    <div className=' flex justify-center items-center gap-10 border-b py-2'>
                        <div>
                            <FaBusAlt size={30}/>
                        </div>
                        <div>
                            <p className=' font-bold text-lg '>Sefer Gerçekleşti</p>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center mt-4 gap-2 border-b py-2'>
                        <p>Antalya Otogarı - Bursa Otogarı</p>
                        <p>03 Mart 2024 Pazar-22:00</p>
                    </div>


                    <div className=' py-2 flex flex-col gap-2'>
                        <div className=' flex justify-start items-center'>
                            <p className=' w-40'>Ad Soyad:</p>
                            <p>Rıdvan Korurer</p>
                        </div>

                        <div className=' flex justify-start items-center'>
                            <p className=' w-40'>Pnr:</p>
                            <p>857235</p>
                        </div>

                        <div className=' flex justify-start items-center'>
                            <p className=' w-40'>Koltuk No:</p>
                            <p>22</p>
                        </div>

                        <div className=' flex justify-start items-center font-bold '>
                            <p className=' w-40'>Fiyat:</p>
                            <p className='text-green-600 text-lg'>500 ₺</p>
                        </div>
                    </div>
            </div>



            <div className=' flex-1 p-4 border flex justify-start items-center flex-col '>
                <div className=' py-2 border-b w-full text-center flex justify-center items-center gap-5'>
                    <FaTicketSimple size={30}/>
                    <h2 className=' font-bold text-lg'>Seferi Değerlendir</h2>
                </div>

                <div className=' flex justify-center h-full items-start gap-4 flex-col w-full mt-4'>
                    <div className=' flex justify-center items-center border-b py-2'>
                        <div className=' w-40 font-bold'>Konfor: </div>
                        <div className=' flex gap-2 hover:cursor-pointer'>
                            < FaStar className={`${konfor >= 1 ? " text-orange-600 " : ""}`} onClick={() => setKonfor(1)} size={22}/>
                            < FaStar className={`${konfor >= 2 ? " text-orange-600 " : ""}`}  onClick={() => setKonfor(2)} size={22}/>
                            < FaStar className={`${konfor >= 3 ? " text-orange-600 " : ""}`}  onClick={() => setKonfor(3)} size={22}/>
                            < FaStar className={`${konfor >= 4 ? " text-orange-600 " : ""}`}  onClick={() => setKonfor(4)} size={22}/>
                            < FaStar className={`${konfor >= 5 ? " text-orange-600 " : ""}`}  onClick={() => setKonfor(5)} size={22}/>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center border-b py-2'>
                        <div className=' w-40 font-bold'>Hizmet: </div>
                        <div className=' flex gap-2 hover:cursor-pointer'>
                            < FaStar className={`${hizmet >= 1 ? " text-orange-600 " : ""}`} onClick={() => setHizmet(1)} size={22} />
                            < FaStar className={`${hizmet >= 2 ? " text-orange-600 " : ""}`} onClick={() => setHizmet(2)} size={22} />
                            < FaStar className={`${hizmet >= 3 ? " text-orange-600 " : ""}`} onClick={() => setHizmet(3)} size={22} />
                            < FaStar className={`${hizmet >= 4 ? " text-orange-600 " : ""}`} onClick={() => setHizmet(4)} size={22} />
                            < FaStar className={`${hizmet >= 5 ? " text-orange-600 " : ""}`} onClick={() => setHizmet(5)} size={22} />
                        </div>
                    </div>

                    <div className=' flex justify-center items-center border-b py-2'>
                        <div className=' w-40 font-bold '>Servis: </div>
                        <div className=' flex gap-2 hover:cursor-pointer'>
                            < FaStar className={`${servis >= 1 ? " text-orange-600 " : ""}`} onClick={() => setServis(1)} size={22} />
                            < FaStar className={`${servis >= 2 ? " text-orange-600 " : ""}`} onClick={() => setServis(2)} size={22} />
                            < FaStar className={`${servis >= 3 ? " text-orange-600 " : ""}`} onClick={() => setServis(3)} size={22} />
                            < FaStar className={`${servis >= 4 ? " text-orange-600 " : ""}`} onClick={() => setServis(4)} size={22} />
                            < FaStar className={`${servis >= 5 ? " text-orange-600 " : ""}`} onClick={() => setServis(5)} size={22} />
                        </div>
                    </div>
                </div>

                <div className=' w-full'>
                    <button className=' bg-blue p-1 mt-4 rounded-xl w-full hover:bg-lightBlue transition-all'>Gönder</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TicketPoint