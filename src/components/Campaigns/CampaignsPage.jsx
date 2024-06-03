import React from "react";
import { campaignInfo } from "../../CampaignsInfo.js";
import { useDispatch, useSelector } from "react-redux";
import { openDetails, closeDetails } from "../../redux/slices/CampaignSlice.js";
function CampaignsPage() {
  const { isClicked } = useSelector((state) => state.campaignDetail);
  const dispatch = useDispatch();
  const closeDetail = () => {
    dispatch(closeDetails());
  };
  return (
    <>    
      {isClicked && (
        <div className="bg-white absolute w-2/3 h-full font-gemunu overflow-y-auto max-h-[700px] z-30 opacity-100 rounded sm:w-[600px] md:w-2/3 lg:w-2/3 xl:w-2/3">
          {campaignInfo.map((info, index) => (
            <div key={index} className="flex h-[210px] m-1 border-4 mt-2">
              <div>
                <img src={info.image} alt="" className="w-[200px] h-[200px] rounded mb-1" />
              </div>
              <div className="w-2/3 ml-8 mt-4 mb-4 sm:overflow-y-auto sm:max-h-[200px] ">
                <h6 className="font-bold mt-2 text-xl ml-2 underline">{info.name}</h6>
                <h6 className="font-semibold text-lg ml-2">{info.brand}</h6>
                <p className="text-md ml-2 mt-2">{info.description}</p>
              </div>
            </div>
          ))}
        </div>        
      )}
      {isClicked && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20" onClick={closeDetail}>
          </div>
      )}
    </>
  );
}

export default CampaignsPage;
