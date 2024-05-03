import React, { useState } from "react";
import { campaignInfo } from "../../CampaignsInfo";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Campaigns() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

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
    <div className=" w-[620px] mx-auto my-10 font-gemunu">
      <div className=" relative flex border bg-darkBlue">
        {campaignInfo?.map((item, i) => (
          <div key={i}>
            {currentItemIndex === i && (
              <div className=" relative flex justify-center items-center ml-[34px] bg-light rounded">
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
                  <Link><button className="btn bg-lightBlue font-semibold rounded p-2 hover:bg-darkBlue hover:text-light absolute bottom-3 duration-300">Detaylar için tıklayınız</button></Link>
                </div>
              </div>
            )}
          </div>
        ))}
        <div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-darkBlue text-white pt-16 pb-16 pl-2 pr-2 text-lg hover:bg-blue duration-300 "
          onClick={prevItem}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-darkBlue text-white pt-16 pb-16 pl-2 pr-2 text-lg hover:bg-blue duration-300"
          onClick={nextItem}
        >
          <FaChevronRight />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
