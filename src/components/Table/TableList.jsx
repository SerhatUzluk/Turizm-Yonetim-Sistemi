import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";

const TableList = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const handleClickIsDropDownFunc = () => {
    setIsDropDown(true);
  };

  const handleClickIsDropDownFuncFalse = () => {
    setIsDropDown(false);
  };

  return (
    <>
      {isDropDown ? (
        <div>
          <div className="w-5/6 border h-18 mr-auto ml-auto mt-10">
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

          <div className="w-5/6 h-72 border-2 ml-auto mr-auto flex">
            <div className="w-4/5 flex justify-center items-center">
              şablon kısmı
            </div>

            <div className=" w-1/5 border flex items-end justify-center">
              <div>
                <button className="bg-lightBlue text-white h-8 w-16 rounded-xl m-2">
                  Onayla
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-5/6 border h-18 mr-auto ml-auto mt-10">
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
    </>
  );
};

export default TableList;
