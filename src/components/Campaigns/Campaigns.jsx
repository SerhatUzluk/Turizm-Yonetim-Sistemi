import React, { useState } from "react";
import { campaignInfo } from "../../CampaignsInfo";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeDetails, openDetails } from "../../redux/slices/CampaignSlice";
import CampaignsPage from "./CampaignsPage";

export function Campaigns() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const dispatch = useDispatch();

  const openDetail = () => {
    dispatch(openDetails());        
  };
  const closeDetail = () => {
    dispatch(closeDetails());    
  }

  const prevItem = () => {
    setCurrentItemIndex(
      (currentItemIndex - 1 + campaignInfo.length) % campaignInfo.length
    );
  };

  const nextItem = () => {
    setCurrentItemIndex((currentItemIndex + 1) % campaignInfo.length);
  };
 
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };
  
  return (
    <div className="md:w-[620px] mx-auto my-10 font-gemunu flex">
      <button
          className="transform bg-darkBlue text-white pt-16 pb-16 pl-2 pr-2 text-lg hover:bg-blue duration-300"
          onClick={prevItem}
        >
          <FaChevronLeft className="text-6xl"/>
        </button>
      <div className=" relative flex border bg-darkBlue items-center">
        {campaignInfo?.map((item, i) => (
          <div key={i}>
            {currentItemIndex === i && (
              <div className=" relative flex justify-center items-center bg-light rounded">
                <img
                  className=" h-[200px] w-[250px] rounded"
                  src={item.image}
                  alt=""
                />
                <div className="w-[269px] ml-8">
                  <h6 className="text-darkBlue  md:font-bold md:text-2xl">
                    {item.name}
                  </h6>
                  <p className=" text-sm md:text-lg italic overflow-hidden w-[250px] mb-[35px]">
                    {truncateText(item.description, 70)}
                  </p>
                  <button className="btn bg-lightBlue font-semibold rounded p-2 hover:bg-darkBlue hover:text-light absolute bottom-3 duration-300"
                    onClick={openDetail}
                  >Detaylar için tıklayınız</button>                  
                </div>
              </div>
            )}
            
          </div>
        ))}
        <div>        
        <button
          className="transform bg-darkBlue text-white pt-16 pb-16 pl-2 pr-2 text-lg hover:bg-blue duration-300"
          onClick={nextItem}
        >
          <FaChevronRight className="text-6xl"/>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
