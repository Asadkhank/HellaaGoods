import React, { useState } from 'react';
import HatImage from '../assets/Redcap.webp';
import BeanieImage from '../assets/Topi.webp';
import TeeImage from '../assets/whiteshirt.webp';

// Existing two pics

import wildwhite from '../assets/pack11.webp';
import wildred from '../assets/wildred.webp';
import whiterub from '../assets/hellopack.webp';
import redrub from '../assets/pack.webp';
import Whiteumami from '../assets/bottle22.webp';
import Redumami from '../assets/bottle2.webp';
import whitepine from '../assets/Bottle.webp';
import redpina from '../assets/Bottle.webp';
import whitechili from '../assets/blackchili1.webp';
import Redchili from '../assets/blackchili.webp';
import whiteOil from '../assets/WhiteViginOil.webp';
import RedOil from '../assets/RedVerginOil.webp';

const ProductCard = () => {
  // State for each product selection
  const [selectedHat, setSelectedHat] = useState(false);
  const [selectedBeanie, setSelectedBeanie] = useState(false);
  const [selectedTee, setSelectedTee] = useState(false);
  
  // State for new products
  const [selectedWild, setSelectedWild] = useState(false);
  const [selectedRub, setSelectedRub] = useState(false);
  const [selectedUmami, setSelectedUmami] = useState(false);
  const [selectedPine, setSelectedPine] = useState(false);
  const [selectedChili, setSelectedChili] = useState(false);
  const [selectedOil, setSelectedOil] = useState(false);

  return (
    <section className="min-h-screen w-full bg-green-500 text-center lg:pt-20 py-16">
      <h1 className="text-5xl font-bold text-black">HELLA GOOD MERCH</h1>
      <p className="text-black mt-2">Fresh fits for fresh food.</p>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:max-w-7xl mx-auto mt-8">

        {/* Existing Hat Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedHat ? HatImage : BeanieImage}
              alt="Hella Good Hat"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
            />
          </div>
          <h2 className="mt-4 font-semibold">HELLA GOOD HAT</h2>
          <p className="text-gray-700">$40.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setSelectedHat(true)} // Show Hat image
                className={`px-4 py-2 ${selectedHat ? 'bg-black text-white' : 'bg-white text-black'} border border-black rounded-full transition-all duration-300`}
              >
                View Hat
              </button>
              <button
                onClick={() => setSelectedHat(false)} // Show Beanie image
                className={`px-4 py-2 ${!selectedHat ? 'bg-black text-white' : 'bg-white text-black'} border border-black rounded-full transition-all duration-300`}
              >
                View Beanie
              </button>
            </div>
            <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>

        {/* Existing Beanie Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedBeanie ? BeanieImage : TeeImage}
              alt="Hella Good Beanie"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
            />
          </div>
          <h2 className="mt-4 font-semibold">HELLA GOOD BEANIE</h2>
          <p className="text-gray-700">$40.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setSelectedBeanie(true)} // Show Beanie image
                className={`px-4 py-2 ${selectedBeanie ? 'bg-black text-white' : 'bg-white text-black'} border border-black rounded-full transition-all duration-300`}
              >
                View Beanie
              </button>
              <button
                onClick={() => setSelectedBeanie(false)} // Show Tee image
                className={`px-4 py-2 ${!selectedBeanie ? 'bg-black text-white' : 'bg-white text-black'} border border-black rounded-full transition-all duration-300`}
              >
                View Tee
              </button>
            </div>
            <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>

        {/* Existing Tee Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="absolute top-2 left-2 bg-black text-white text-xs z-10 font-bold px-2 py-1 rounded-full">SOLD OUT</div>
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedTee ? TeeImage : HatImage}
              alt="Hella Good Tee"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
            />
          </div>
          <h2 className="mt-4 font-semibold">HELLA GOOD TEE</h2>
          <p className="text-gray-700">$40.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setSelectedTee(true)} // Show Tee image
                className={`px-4 py-2 ${selectedTee ? 'bg-black text-white' : 'bg-white text-black'} border border-black rounded-full transition-all duration-300`}
              >
                View Tee
              </button>
              <button
                onClick={() => setSelectedTee(false)} // Show Hat image
                className={`px-4 py-2 ${!selectedTee ? 'bg-black text-white' : 'bg-white text-black'} border border-black rounded-full transition-all duration-300`}
              >
                View Hat
              </button>
            </div>
            <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>

        {/* New Wild Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedWild ? wildred : wildwhite}
              alt="Wild Product"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
              onMouseEnter={() => setSelectedWild(true)} // Show red image on hover
              onMouseLeave={() => setSelectedWild(false)} // Revert to white image
            />
          </div>
          <h2 className="mt-4 font-semibold">WILD PRODUCT</h2>
          <p className="text-gray-700">$50.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
          <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>

        {/* New Rub Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedRub ? redrub : whiterub}
              alt="Rub Product"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
              onMouseEnter={() => setSelectedRub(true)} // Show red image on hover
              onMouseLeave={() => setSelectedRub(false)} // Revert to white image
            />
          </div>
          <h2 className="mt-4 font-semibold">RUB PRODUCT</h2>
          <p className="text-gray-700">$30.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
          <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>

        {/* New Umami Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedUmami ? Redumami : Whiteumami}
              alt="Umami Product"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
              onMouseEnter={() => setSelectedUmami(true)} // Show red image on hover
              onMouseLeave={() => setSelectedUmami(false)} // Revert to white image
            />
          </div>
          <h2 className="mt-4 font-semibold">UMAMI PRODUCT</h2>
          <p className="text-gray-700">$25.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
          <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>

        {/* New Pine Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedPine ? redpina : whitepine}
              alt="Pine Product"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
              onMouseEnter={() => setSelectedPine(true)} // Show red image on hover
              onMouseLeave={() => setSelectedPine(false)} // Revert to white image
            />
          </div>
          <h2 className="mt-4 font-semibold">PINE PRODUCT</h2>
          <p className="text-gray-700">$20.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
          <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>

        {/* New Chili Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedChili ? Redchili : whitechili}
              alt="Chili Product"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
              onMouseEnter={() => setSelectedChili(true)} // Show red image on hover
              onMouseLeave={() => setSelectedChili(false)} // Revert to white image
            />
          </div>
          <h2 className="mt-4 font-semibold">CHILI PRODUCT</h2>
          <p className="text-gray-700">$35.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
          <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>

        {/* New Oil Card */}
        <div className="relative p-4 border-black transition-transform transform">
          <div className="relative">
            <div className="absolute w-full h-full -z-10 top-2 -right-2 bg-black shadow-lg rounded" />
            <img
              src={selectedOil ? RedOil : whiteOil}
              alt="Oil Product"
              className="lg:w-[600px] lg:h-[400px] object-cover border border-black transform hover:scale-110 transition-transform"
              onMouseEnter={() => setSelectedOil(true)} // Show red image on hover
              onMouseLeave={() => setSelectedOil(false)} // Revert to white image
            />
          </div>
          <h2 className="mt-4 font-semibold">OIL PRODUCT</h2>
          <p className="text-gray-700">$45.00</p>
          <div className="flex flex-col items-center mt-4 space-y-2">
          <button 
             onClick={() => alert('Added to Cart!')}
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          Add To Cart
        </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
