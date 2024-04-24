import React from "react";
import Slider from "../components/Slider/Slider";
import HeroSection from "../components/HeroSection/HeroSection";
import { Information } from "../BrandInformation.js";
import { BrandCard } from "../components/BrandCard.jsx";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <Slider />
      <HeroSection />
      <div className="flex flex-wrap justify-center items-center mt-12">
        {Information.map((info) => (
          <BrandCard key={info.name} item={info}></BrandCard>
        ))}
        <div className="bg-lightBlue font-gemunu mt-4 hover:scale-105 transition duration-300">
          <Link className="font-bold py-2 px-4 rounded shadow-md text-2xl btn">Diğer Turizm firmalarını incelemek için tıklayın</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
