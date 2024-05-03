import React from 'react'
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { modalFalse } from '../../redux/slices/ExpeditionSlice';

const ExpeditionDetail = () => {
    const dispatch = useDispatch();

    const handleClickModelClose = () => {
        dispatch(modalFalse());
    }

  return (
    <div className=' border w-[440px] h-[440px] px-2 rounded relative'>
        <div>
            <div className=' flex justify-center border-b py-2'>
                <h2 className=' font-bold'>Sefer Detayları</h2>
            </div>

            <div className=' py-2'>
                <div className=' font-semibold'>Sefer Bilgisi:</div>

                <div className=' border-b py-2'>
                    <ul>
                        <li className=' text-sm'><span className='font-bold text-lg'>*</span>ARACIMIZ İSTANBUL - ANKARA ARASINDA ANADOLU YAKASI DAHİL HİÇBİR DURAĞA UĞRAMAYACAKTIR. DOĞRUDAN ÇEVREYOLU ÜZERİNDEN DEVAM ETMEKTEDİR.</li>
                        <li className=' text-sm font-semibold'><span className=' font-bold text-lg'>*</span>  Belirtilen süreler taşıyıcı firma tarafından iletilmektedir. Kalkış ve varış saatleri tahmini olup sefer saatindeki değişikliklerden obilet.com sorumlu değildir</li>
                    </ul>
                </div>

                <div className=' flex flex-col border-b py-2 gap-2'  >
                    <div className=' font-semibold'>Özellikler:</div>
                    <div className=' flex  gap-5 items-center'>
                        <FaWifi size={27}/>
                        <PiTelevisionSimpleBold size={27}/>
                        <FaHeadphones size={27}/>
                        <BsPhoneFill size={27}/>
                    </div>
                </div>

                <div className=' flex gap-2 flex-col py-2'>
                    <div className=' font-semibold'>Güzergah:</div>
                    <div>
                        <ul className=' flex flex-col gap-2'>
                            <li className=' flex gap-5 bg-gray-100 rounded'>
                                <span className=' w-20 font-bold'>23:59</span>
                                <span>İstanbul</span>
                            </li>

                            <li className=' flex gap-5 bg-gray-100 rounded'>
                                <span className=' w-20 font-bold'>3:59</span>
                                <span>Bursa</span>
                            </li>

                            <li className=' flex gap-5 bg-gray-100 rounded'>
                                <span className=' w-20 font-bold'>7:59</span>
                                <span>Anakara</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className=' absolute top-2 right-2'>
            <IoIosCloseCircle onClick={handleClickModelClose} size={25} className=' hover:scale-125 transition-all cursor-pointer text-red-600'/>
        </div>
    </div>
  )
}

export default ExpeditionDetail