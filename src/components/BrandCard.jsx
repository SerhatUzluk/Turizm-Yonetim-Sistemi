import React from "react";

export const BrandCard = ({item}) => {  
  return (
    <>
      <div className="flex flex-wrap bg-light hover:scale-105 transition duration-300">
        <div className="w-[250px] rounded overflow-hidden shadow-lg flex-1 flex-row p-3 m-4 bg-white">
          <img
            className="w-full aspect-ratio-4/3"
            src={item.logo}
            alt={item.name + 'logo'}
          />          
          <div className="px-6 py-4 font-gemunu bg-lightBlue">
            <div className="font-bold text-xl mb-2">{item.name}</div>
            <p className="text-gray-700 text-base">
              {item.description}
            </p>
          </div>                    
        </div>
      </div>
    </>
  );
};
