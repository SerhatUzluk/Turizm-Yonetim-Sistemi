import React, { useState } from 'react'
import bus1 from "../../assets/images/bus1.jpg";
import bus3 from "../../assets/images/bus3.jpg";
import bus4 from "../../assets/images/bus4.jpg";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const Slider = () => {
    const carouselItems = [
        { imageUrl: bus1, subtitle: 'Liberte', title: 'Lorem Ipsum Dolor Sit Amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { imageUrl: bus3, subtitle: 'Fraternite', title: 'Neque Porro Quisquam Est', description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
        { imageUrl: bus4, subtitle: 'Deneme', title: 'DEnemede deneme', description: 'Dolorem nam, at praesentium minima fugit magni voluptatibus ipsum adipisci' }
      ];

      

    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    
    const prevItem = () => {
        setCurrentItemIndex((currentItemIndex - 1 + carouselItems.length) % carouselItems.length);
    }

    const nextItem = () => {
        setCurrentItemIndex((currentItemIndex + 1) % carouselItems.length);
    }
    


  return (
    <div className=' w-10/12 mx-auto my-10'>
         <div className=' relative'>
            {carouselItems?.map((item, i) => (
                <div key={i}>
                    {currentItemIndex === i && 
                        <div className=' relative  justify-center items-center'>
                            <img className=' h-[600px] w-full' src={item.imageUrl} alt="" />
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className=' absolute top-32 md:top-52 left-5 md:left-20 flex flex-col gap-5 text-white p-4 md:p-0'>
                                <h6 className=' text-lightBlue font-light md:font-bold text-lg md:text-2xl'>{item.subtitle}</h6>
                                <h1 className=' text-xl md:text-6xl font-bold font-gemunu'>{item.title}</h1>
                                <p className=' text-sm md:text-lg italic'>{item.description}</p>
                            </div>
                        </div>
                    }
                </div>
            ))}


            <div className=' absolute bottom-5 text-white flex gap-3 left-5 text-5xl '>
                <button className= ' text-lightBlue hover:text-blue text-pink transition-all hover:scale-110 ' onClick={prevItem}><FaChevronCircleLeft /></button>
                <button className= 'text-lightBlue  hover:text-blue text-pink transition-all hover:scale-110 ' onClick={nextItem}><FaChevronCircleRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Slider