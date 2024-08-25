import React from "react";
import { FaHandPointLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const BrandCard = ({item}) => {  
  return (
    <>
      <div className="flex flex-wrap bg-light hover:scale-105 transition duration-300 group grid-cols-4">
        <div className="w-[250px] rounded overflow-hidden shadow-lg flex-1 flex-row p-3 m-4 bg-white">
          <img
            className="w-full aspect-ratio-4/3"
            src={item.logo}
            alt={item.name + 'logo'}
          />          
          <div className="px-6 py-4 font-gemunu bg-lightBlue">
            <div className="font-bold text-lg mb-2 ">{item.name}</div>
            <Link>
            <div className="relative bg-darkBlue text-white opacity-0 group-hover:opacity-100 rounded-sm duration-500">              
            <p className="text-Black text-base font-bold ml-3">
              Firmaya gitmek için tıkla
            </p>
            <FaHandPointLeft className="absolute right-1 bottom-1 animate-bounce duration-300"/>
            </div>
            </Link>
          </div>                    
        </div>
      </div>
    </>
  );
};
