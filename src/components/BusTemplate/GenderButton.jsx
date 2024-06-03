import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";
import { close } from "../../redux/slices/GenderButtonSlice";

function GenderButton({ Open }) {
  const [gender, setGender] = useState("Cinsiyet");
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Open) {
      setGender("Cinsiyet");
      setShowInput(false);
    }
  }, [Open]);


  return (
    <>
      {Open && (
        <div className="flex mt-4 relative mb-4 h-[50px]">
          <div className="text-2xl bg-gray-400 w-[115px] h-[50px] pl-2 pr-2 mt-2 ml-4 text-white rounded">
            <button
              className="bg-blue p-2 mr-1 rounded mt-1 focus:scale-105 focus:bg-lightBlue ml-1 focus:border"
              onClick={() => {
                setGender("Erkek");
                setShowInput(true);
              }}
            >
              <FcBusinessman />
            </button>
            <button
              className="bg-pink p-2 rounded ml-1 focus:scale-105 focus:bg-lightBlue focus:border"
              onClick={() => {
                setGender("Kadın");
                setShowInput(true);
              }}
            >
              <FcBusinesswoman />
            </button>            

          </div>
          <div className="font-semibold bg-gray-400 h-[50px] p-1 font-gemunu text-lg rounded mt-2 text-center ml-1 w-[65px]">
            <p className="mt-2">{gender}</p>
          </div>

          {showInput && (
            <div className="ml-5 flex flex-col justify-center items-center">
              
             
              <p className="text-xs font-semibold">TC. Kimlik No Giriniz</p>
              <input
                id="tc"
                name="tc"
                type="tc"
                autoComplete="tc"
                required
                className="block w-28 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              
              />
            
                <button className="bg-blue text-white rounded-md text-sm w-full mt-1">Seç</button>
            
              
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default GenderButton;
