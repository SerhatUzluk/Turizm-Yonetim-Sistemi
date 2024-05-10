import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";

function GenderButton({ Open }) {
  const [gender, setGender] = useState("cinsiyet");

  useEffect(() => {
    if (!Open) {
      setGender("Cinsiyet");
    }
  }, [Open]);

  return (
    <>
      {Open && (
        <div className="flex mt-4 ml-2">
          <div className="text-2xl bg-gray-400 w-[115px] h-[50px] pl-2 pr-2 mt-4 ml-4 text-white rounded">
            <button
              className="bg-blue p-2 mr-1 rounded mt-1 focus:scale-105 focus:bg-lightBlue ml-1 focus:border"
              onClick={() => setGender("Erkek")}
            >
              <FcBusinessman />
            </button>
            <button
              className="bg-pink p-2 rounded ml-1 focus:scale-105 focus:bg-lightBlue focus:border"
              onClick={() => setGender("Kadın")}
            >
              <FcBusinesswoman />
            </button>            
          </div>
          <div className="font-semibold bg-gray-400 h-[50px] p-1 font-gemunu text-lg rounded mt-4 text-center ml-1 w-[65px]">
              <p className="mt-2">{gender}</p>
            </div>
        </div>
      )}
    </>
  );
}

export default GenderButton;
