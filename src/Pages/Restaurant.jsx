import React from 'react';
import Plate from '../assets/plate.webp';
import Menu from '../Components/Menu';

const Restaurant = () => {
  return (
    <>
      <section className="relative mt-4 -z-10 overflow-hidden mb-16 sm:mb-20"> {/* Added mb-16 for mobile, sm:mb-20 for larger screens */}
        <img 
          src={Plate} 
          alt="Plate"
          className="object-cover w-full h-auto"
          style={{ maxHeight: '450px' }}
        />

        <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-8 text-center">
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-[500px]">
            <div 
              className="relative px-6 py-8 sm:px-10 sm:py-12 bg-white rounded-2xl shadow-lg" 
              style={{ boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)' }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold text-gray-900">HELLA GOOD FOOD</h1>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">This is our special sauce</p>
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-28">
        <Menu />
      </div>

      <section>
        <div className="bg-green-400 min-h-screen flex flex-col items-center justify-center px-4 sm:px-10 py-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8 sm:mb-16">The Locations</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            {/* First Card */}
            <div
              className="h-48 sm:h-60 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg flex flex-col items-center justify-center text-center rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative group"
            >
              <div className="absolute inset-0 bg-blue-800 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 relative">CDMX, MEXICO</h2>
              <p className="text-gray-200 text-sm sm:text-base mb-1 sm:mb-2 relative">Thu-Sun 12pm till late</p>
              <p className="text-gray-200 text-sm sm:text-base relative">Nápoles 55-71, Juárez, Cuauhtémoc</p>
            </div>

            {/* Second Card */}
            <div
              className="h-48 sm:h-60 bg-gradient-to-r from-red-500 to-red-700 shadow-lg flex flex-col items-center justify-center text-center rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative group"
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 50% 80%, 0% 80%)" }}
            >
              <div className="absolute inset-0 bg-red-800 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 relative">NYC, USA</h2>
              <p className="text-gray-200 text-sm sm:text-base mb-1 sm:mb-2 relative">Thu-Sun 12pm till late</p>
              <p className="text-gray-200 text-sm sm:text-base relative">47 W 13th St, New York</p>
            </div>

            {/* Third Card */}
            <div
              className="h-48 sm:h-60 bg-gradient-to-r from-yellow-500 to-yellow-700 shadow-lg flex flex-col items-center justify-center text-center rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative group"
              style={{ clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" }}
            >
              <div className="absolute inset-0 bg-yellow-800 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 relative">TOKYO, JAPAN</h2>
              <p className="text-gray-200 text-sm sm:text-base mb-1 sm:mb-2 relative">Thu-Sun 12pm till late</p>
              <p className="text-gray-200 text-sm sm:text-base relative">1 Chome-8-21 Jingumae, Shibuya City, Tokyo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
