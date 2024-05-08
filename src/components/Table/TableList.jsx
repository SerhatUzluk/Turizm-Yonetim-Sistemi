import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import BusTemplateType3 from '../BusTemplate/BusTemplateType3.jsx'
import BusTemplateType1 from '../BusTemplate/BusTemplateType1.jsx'
import BusTemplateType2 from '../BusTemplate/BusTemplateType2.jsx'
import Campaigns from '../Campaigns/Campaigns.jsx'
import { useDispatch, useSelector } from "react-redux";
import { modalTrue } from "../../redux/slices/ExpeditionSlice.js";
import ExpeditionDetail from "./ExpeditionDetail.jsx";
import { useNavigate } from 'react-router-dom';

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
    <div className=" relative">
      {isDropDown ? (
        <div>
          <div className="w-full border h-18 mr-auto ml-auto mt-10">
            <tr className=" focus:outline-none h-16 border border-gray-300 flex justify-between  items-center relative">
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
          <div className="w-full h-96 border-2 ml-auto mr-auto flex">
            <div className="w-full flex justify-center items-center mt-8">
              <BusTemplateType2/>
            </div>

            <div className=" w-56 border flex items-end justify-center">
              <div>
                <button className="bg-lightBlue text-white h-8 w-16 rounded-xl m-2" onClick={handleClickButton}>
                  Onayla
                </button>
              </div>
            </div>
          </div>
          <div>
            <Campaigns/>
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
          <button onClick={handleClickDetail} className=" absolute top-20 left-36 bg-darkBlue text-white p-1 rounded cursor-pointer">Sefer Detayları</button>
        ) : (null)
      }
    </div>
    </>
  );
};

export default TableList;