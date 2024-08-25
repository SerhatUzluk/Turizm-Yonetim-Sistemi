import React from "react";
import img1 from "../../assets/images/Illustration1.png";
import img2 from "../../assets/images/Illustration2.png";
import img3 from "../../assets/images/Illustration3.png";
import img4 from "../../assets/images/Illustration4.png";
import img5 from "../../assets/images/Illustration5.png";

const HeroSectionImages = () => {
  return (
    <div className=" h-40 flex w-full justify-evenly main-effect-img">
      <img className=" hover:scale-125 transition-all" src={img1} alt="" />
      <img className=" hover:scale-125 transition-all" src={img2} alt="" />
      <img className=" hover:scale-125 transition-all" src={img3} alt="" />
      <img className=" hover:scale-125 transition-all" src={img4} alt="" />
      <img className=" hover:scale-125 transition-all" src={img5} alt="" />
    </div>
  );
};

export default HeroSectionImages;
