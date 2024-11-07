// src/ProductOfTheMonth.jsx
import React, { useState } from "react";
import chilli from '../assets/blackchili.webp';
import chilli2 from '../assets/blackchili1.webp';

const ProductOfTheMonth = () => {
  const [mainImage, setMainImage] = useState(chilli);

  return (
    <>
      <div className="py-16 text-center">
        <h2 className="text-5xl font-bold uppercase mb-8">Product of the Month</h2>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-white">
          {/* Left Section - Thumbnail Images and Main Image */}
          <div className="hidden sm:block lg:flex gap-4">
            {/* Thumbnail Images */}
            <div className="flex flex-col gap-4">
              <img
                src={chilli}
                alt="Thumbnail 1"
                className="w-24 h-24 border-2 rounded-full cursor-pointer"
                onClick={() => setMainImage(chilli)}
              />
              <img
                src={chilli2}
                alt="Thumbnail 2"
                className="w-24 h-24 border-2 rounded-full cursor-pointer"
                onClick={() => setMainImage(chilli2)}
              />
            </div>
            
            {/* Main Product Image with Detached Border */}
            <div className="relative p-2 border-4 border-black rounded-md">
              <img
                src={mainImage}
                alt="Crispy Chili Oil"
                className="w-auto h-[520px] rounded-md"
              />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-8xl font-extrabold uppercase mb-4">Crispy Chili Oil</h1>
            <p className="text-lg font-semibold mb-4">$12.00</p>
            <p className="text-gray-700 mb-6">
              Deliciously fiery and surprisingly versatile! Bold, aromatic chilies get a savory boost from
              garlic and shallots, while a hint of soy sauce adds a delightful umami depth. This Crispy Chili Oil
              will elevate any dish with its perfect balance of heat and crunch, making it a must-have for
              everything from stir-fries to noodles, and even as a spicy dip. Indulge in its irresistible flavors
              anytime you crave a burst of zesty excitement!
            </p>
            <div className="flex flex-col gap-4">
              <button 
                className="bg-white text-black font-bold py-3 px-4 -mt-2 rounded-full border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
                style={{ 
                  boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
                  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
              >
                Add To Cart
              </button>
              <button 
                className="bg-white text-black font-bold py-3 px-4 -mt-2 rounded-full border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
                style={{ 
                  boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
                  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
              >
                Buy It Now
              </button>
            </div>
          </div>

          {/* New Label */}
          <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 font-bold rounded-full text-sm">
            NEW!
          </div>
        </div>

        {/* Wavy Background at Bottom (Same as Top) */}
        <div
          style={{
            position: "absolute",
            bottom: -13,
            left: 0,
            right: 0,
            height: "15px",
            backgroundRepeat: "repeat-x",
            backgroundSize: "20px 20px",
            backgroundImage: "radial-gradient(circle at 10px 15px, transparent 12px, white 12px)",
            transform: "rotate(360deg)",
            zIndex: 10,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15px",
            left: 0,
            right: 0,
            height: "15px",
            backgroundRepeat: "repeat-x",
            backgroundSize: "40px 20px",
            backgroundImage: "radial-gradient(circle at 10px 0, white 12px, transparent 12px)",
            transform: "rotate(360deg)",
            zIndex: 10,
          }}
        />
      </div>
    </>
  );
};

export default ProductOfTheMonth;
