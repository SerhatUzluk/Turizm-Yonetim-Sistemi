import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import BusTemplateType3 from '../BusTemplate/BusTemplateType3.jsx'
import BusTemplateType1 from '../BusTemplate/BusTemplateType1.jsx'
import BusTemplateType2 from '../BusTemplate/BusTemplateType2.jsx'
import { useDispatch, useSelector } from "react-redux";
import { modalTrue } from "../../redux/slices/ExpeditionSlice.js";
import ExpeditionDetail from "./ExpeditionDetail.jsx";
import { useNavigate } from 'react-router-dom';
import TopLinks from "../TopLinks.jsx";

const TableList = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const navigate = useNavigate();

   const dispatch = useDispatch(); 
    const handleClickDetail = () => {
       dispatch(modalTrue()); 
    };

  const handleClickIsDropDownFunc = () => {
    setIsDropDown(true);
  };

  const handleClickIsDropDownFuncFalse = () => {
    setIsDropDown(false);
  };


  const handleClickButton = () => {
    navigate('/odeme-sistemi');
};

  return (
    <>

    {/* topLinks */}
    <div className=" w-full flex justify-start items-center pl-32 mt-2">
        <TopLinks />
    </div>
    
    <div className=" relative">
      {isDropDown ? (
        <div>
          <div className="w-full border h-18 mr-auto ml-auto mt-6">
            <tr className="focus:outline-none h-16 border border-gray-300 flex justify-between  items-center relative">
              <td className="pl-5">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">
                  Logo
                </p>
              </td>

              <td className="">
                <p className="text-sm leading-none text-gray-600 ml-2">2+1</p>
              </td>

              <td className="">
                <p className="text-sm leading-none text-gray-600 ml-2">23:00</p>
              </td>

              <td className="">
                <p className="text-sm leading-none text-gray-600 ml-2">500$</p>
              </td>

              <td>
                <div className="pl-2">
                  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded text-white">
                    bilet al
                  </button>
                </div>
              </td>

              <div className="pr-8 text-3xl">
                <>
                  {isDropDown ? (
                    <FaChevronUp
                      onClick={handleClickIsDropDownFuncFalse}
                      className="cursor-pointer"
                    />
                  ) : (
                    <IoIosArrowDown
                      onClick={handleClickIsDropDownFunc}
                      className="cursor-pointer"
                    />
                  )}
                </>
              </div>
            </tr>
          </div>
        <div className="block">
          <div className="w-full h-104 border-2 ml-auto mr-auto block lg:flex items-center">
            <div className="w-full flex justify-center items-center mt-[75px]">
              <BusTemplateType3 />
            </div>

            <div className=" w-1/5 border-t-2 mt-2 flex flex-col  justify-between py-2 items-center price-bar relative">
              <div className=" flex flex-col justify-start w-full pl-8 gap-20">
                <div className=" mt-4 flex lg:flex-col gap-2 ">
                  <p className=" font-bold mt-2">Seçtiğiniz Koltuklar</p>
                  <div>
                    <div className="seatPart">
                      <button className="seat">49</button>
                      <button className="back"></button>
                    </div>

                    <div className="seatPart">
                      <button className="seat">50</button>
                      <button className="back"></button>
                    </div>

                    <div className="seatPart">
                      <button className="seat">51</button>
                      <button className="back"></button>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col gap-2 justify-start">
                  <p className="font-bold text-xs">Toplam Fiyat</p>
                  <span className=" font-bold text-md lg:text-2xl text-center bg-green text-white rounded-lg px-[3px] py-[5px]">2196₺</span>
                </div>
              </div>

              <div>
                <button className="bg-lightBlue hover:bg-darkBlue transition-all text-white p-2 rounded-xl m-2 font-bold onay-btn" onClick={handleClickButton}>
                  Onayla ve Devam Et
                </button>
              </div>
            </div>
            
          </div>          
        
          </div>
        </div>
      ) : (
        <div className="w-full border h-18 mr-auto ml-auto mt-10">
          <tr className="focus:outline-none h-16 border border-gray-300 flex justify-between  items-center relative">
            <td className="pl-5">
              <p className="text-base font-medium leading-none text-gray-700 mr-2">
                Logo
              </p>
            </td>

            <td className="">
              <p className="text-sm leading-none text-gray-600 ml-2">2+1</p>
            </td>

            <td className="">
              <p className="text-sm leading-none text-gray-600 ml-2">23:00</p>
            </td>

            <td className="">
              <p className="text-sm leading-none text-gray-600 ml-2">500$</p>
            </td>

            <td>
              <div className="pl-2">
                <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded text-white">
                  bilet al
                </button>
              </div>
            </td>

            <div className="pr-8 text-3xl">
              <>
                {isDropDown ? (
                  <FaChevronUp
                    onClick={handleClickIsDropDownFuncFalse}
                    className="cursor-pointer"
                  />
                ) : (
                  <IoIosArrowDown
                    onClick={handleClickIsDropDownFunc}
                    className="cursor-pointer"
                  />
                )}
              </>
            </div>
          </tr>
        </div>
      )}


      {
        isDropDown ? (
          <button onClick={handleClickDetail} className=" absolute top-20 right-6 bg-darkBlue text-white p-1 rounded cursor-pointer">Sefer Detayları</button>
        ) : (null)
      }
    </div>
    </>
  );
};

export default TableList;