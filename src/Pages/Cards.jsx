import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Removed `link` from the import statement
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

import bottle from '../assets/bottle.webp';
import bottle1 from '../assets/bottlle.webp';
import bottle2 from '../assets/bottle2.webp';
import bottle3 from '../assets/bottle22.webp';
import bottle4 from '../assets/hellopack.webp';
import bottle5 from '../assets/pack.webp';
import bottle6 from '../assets/pack2.webp';
import bottle7 from '../assets/pack11.webp';

const imagePairs = [
  { img1: bottle, img2: bottle1, name: "Bottle 1", price: "$10" },
  { img1: bottle2, img2: bottle3, name: "Bottle 2", price: "$12" },
  { img1: bottle4, img2: bottle5, name: "Bottle 3", price: "$15" },
  { img1: bottle6, img2: bottle7, name: "Bottle 4", price: "$18" },
];

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="flex items-center justify-center"
    >
      {imagePairs.map((pair, index) => (
        <SwiperSlide
          key={index}
          className={`relative flex flex-col justify-center items-center transition-transform duration-300 ease-in-out 
            ${activeIndex === index ? 'w-[400px] h-[500px]' : 'w-[350px] h-[450px]'} 
            ${activeIndex === index ? 'scale-110' : 'scale-100'} rounded-lg my-auto`}
        >
          <div className="relative group w-full h-full flex justify-center items-center overflow-hidden">
            <Link to="/WildYozuRub">
              <img
                src={pair.img1}
                alt={`Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:opacity-0 
                  transform group-hover:scale-110`}
                style={{
                  borderRight: '3px solid black',
                  borderBottom: '3px solid black',
                  boxShadow: activeIndex === index 
                    ? '10px 10px 20px rgba(0, 0, 0, 0.5)' 
                    : '5px 5px 15px rgba(0, 0, 0, 0.3)',
                }}
              />
            </Link>
            <Link to="/WildYozuRub">
              <img
                src={pair.img2}
                alt={`Image ${index + 1} Hover`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 
                  transform group-hover:scale-110`}
                style={{
                  borderRight: '3px solid black',
                  borderBottom: '3px solid black',
                  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
                }}
              />
            </Link>
          </div>
          {/* Product Name and Price */}
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold">{pair.name}</h3>
            <p className="text-lg text-gray-700">{pair.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Cards;
