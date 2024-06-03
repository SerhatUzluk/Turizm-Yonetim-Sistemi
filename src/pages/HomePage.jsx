import React from "react";
import Slider from "../components/Slider/Slider";
import HeroSection from "../components/HeroSection/HeroSection";
import { Information } from "../BrandInformation.js";
import { BrandCard } from "../components/BrandCard.jsx";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
const HomePage = () => {
  return (
    <div>
      <Slider />
      <HeroSection />
      <div className="flex justify-center">
        <div className="max-w-6xl">
          <div className="flex flex-wrap justify-start items-center mt-12">
            {Information.slice(0,4).map((info) => (
              <BrandCard key={info.name} item={info}></BrandCard>
            ))}
            <div className="bg-lightBlue font-gemunu mt-4 flex justify-center w-full">
              <Link className="bg-light flex font-bold py-2 px-4 rounded shadow-md text-2xl btn hover:scale-105 transition duration-300 hover:bg-white border-2 border-gray-400" to="/markalar">
                Diğer Turizm firmalarını incelemek için tıklayın
                <FaAngleDoubleRight className="mt-1 ml-2 text-3xl animate-pulse hover:animate-none"/>
              </Link>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default HomePage;
