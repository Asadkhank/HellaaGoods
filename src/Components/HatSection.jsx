// src/App.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import HatImage from '../assets/Redcap.webp'; // Replace with actual path
import BeanieImage from '../assets/Topi.webp'; // Replace with actual path
import TeeImage from '../assets/whiteshirt.webp'; // Replace with actual path

const App = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // State to manage which card is hovered

  return (
    <section className="min-h-screen bg-green-500 text-center py-16">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-black">HELLA GOOD MERCH</h1>
      <p className="text-black mt-2">Fresh fits for fresh food.</p>

      {/* Merch Items */}
      <div className="flex flex-wrap justify-center mt-8 gap-8 max-w-5xl mx-auto">
        {/* Card Wrapper to Control Width */}
        {/** Flex Column for Small Screens, Row for Larger Ones */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Hat */}
          <Link to="/ProductCard" className="relative p-4 w-full sm:w-80 md:w-96 lg:w-[400px] border-black transition-transform transform">
            <div className='relative'>
              <div className="absolute w-full rounded h-full -z-10 top-2 -right-2 bg-black shadow-lg" />
              <img 
                src={hoveredCard === 'hat' ? BeanieImage : HatImage} 
                alt="Hella Good Hat" 
                className="lg:w-full lg:h-[500px] h-[350px] w-[300px] object-cover border border-black" 
                onMouseEnter={() => setHoveredCard('hat')}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>
            <h2 className="mt-4 font-semibold">HELLA GOOD HAT</h2>
            <p className="text-gray-700">$40.00</p>
          </Link>

          {/* Beanie */}
          <Link to="/ProductCard" className="relative p-4 w-full sm:w-80 md:w-96 lg:w-[400px] border-black transition-transform transform">
            <div className='relative'>
              <div className="absolute w-full rounded h-full -z-10 top-2 -right-2 bg-black shadow-lg" />
              <img 
                src={hoveredCard === 'beanie' ? TeeImage : BeanieImage} 
                alt="Hella Good Beanie" 
                className="lg:w-full lg:h-[500px] h-[350px] w-[300px]  object-cover border border-black" 
                onMouseEnter={() => setHoveredCard('beanie')}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>
            <h2 className="mt-4 font-semibold">HELLA GOOD BEANIE</h2>
            <p className="text-gray-700">$40.00</p>
          </Link>

          {/* Tee with Sold Out Badge */}
          <Link to="/ProductCard" className="relative p-4 w-full sm:w-80 md:w-96 lg:w-[400px] border-black transition-transform transform">
            <div className="absolute top-2 left-2 bg-black text-white text-xs z-10 font-bold px-2 py-1 rounded-full">SOLD OUT</div>
            <div className='relative'>
              <div className="absolute w-full rounded h-full -z-10 top-2 -right-2 bg-black shadow-lg" />
              <img 
                src={hoveredCard === 'tee' ? TeeImage : HatImage} 
                alt="Hella Good Tee" 
                className="lg:w-full lg:h-[500px] h-[350px] w-[300px] object-cover border border-black" 
                onMouseEnter={() => setHoveredCard('tee')}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>
            <h2 className="mt-4 font-semibold">HELLA GOOD TEE</h2>
            <p className="text-gray-700">$40.00</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default App;
