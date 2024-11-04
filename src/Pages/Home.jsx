import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Logo from "../assets/logo.svg";
import hellaHome from "../assets/hellaHome.webp";
import chilli from "../assets/chilli.png";
import LowSalt from "../assets/LowSalt.jpg";
import NoBadStuff from "../assets/NoBadStuff.png";
import Organic from "../assets/organic.png";
import NonGmo from "../assets/NonGmo.png";
import NoFakeStuff from "../assets/NoFakeStuff.webp";
import LowCarb from "../assets/LowCarb.webp";
import Cards from "./Cards";
import TestimonialSlider from "../Components/TestimonialSlider";
import ProductOfTheMonth from "../Components/ProductOfTheMonth";
import Video from '../assets/video.webm';
import Food from "../Components/Food";
import SecretSauceSection from "../Components/SecretSauceSection";
import HatSection from "../Components/HatSection";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-8 overflow-hidden"> {/* Prevents vertical scrolling */}
  
     <section className="">
    <div className="relative  mt-28 flex justify-center items-center">
      {/* Container for Image and Black Div */}
      <div className="relative w-[300px] lg:w-[800px]">
        {/* Black Div Positioned Behind the Image with Offset */}
        <div className="absolute -right-2 -bottom-2 w-[calc(100%-8px)] h-[calc(100%-8px)] bg-black -z-10 rounded-lg"></div>
        
        {/* Image Section */}
        <img 
          src={hellaHome} 
          alt="Hella Home" 
          className="w-full h-auto max-h-[600px] rounded-lg" // Control image dimensions
        />

        {/* Right-Side Oval Text Div */}
        <div
          className="hidden sm:block absolute right-[-80px] top-1/3 bg-[yellowgreen] border border-black px-6 py-3 shadow-md text-center text-3xl text-black w-[200px] h-[120px] overflow-y-auto "
          style={{
            clipPath:
              "polygon(50% 0%, 58% 12%, 68% 8%, 78% 20%, 92% 15%, 85% 35%, 100% 50%, 85% 65%, 92% 85%, 75% 78%, 70% 92%, 60% 85%, 50% 100%, 40% 85%, 30% 92%, 25% 78%, 8% 85%, 15% 65%, 0% 50%, 15% 35%, 8% 15%, 25% 20%, 32% 8%, 42% 12%)",
            top: `${scrollY * 0.2 + 120}px`, // Adjusted to move it further up
            transform: `rotate(40deg)`, // Rotate the div by 40 degrees
          }}
        >
          <p className="p-4">
            Full of <br /> Flavour
          </p>
        </div>

        {/* Chili Image with Rotation */}
        <img
          src={chilli}
          alt="Chilli"
          className="absolute lg:w-44  right-[-80px] top-1/2 transform -translate-y-1/2 w-[150px] z-10 lg:top-[400px] lg:translate-y-0" // Adjust the position on lg screens
          style={{
            transform: `rotate(${90 + scrollY}deg)`, // Corrected syntax
          }}
          
        />

        {/* Left-Side Oval Text Div */}
        <div
          className="hidden sm:block absolute left-[-80px] lg:top-32 bg-white shadow-md text-center text-2xl font-bold text-black w-[170px] h-[90px]  items-center justify-center"
          style={{
            borderRadius: "100px 100px 0 0",
            transform: `translateY(-${scrollY * 0.3}px) rotate(-35deg)`, // Set to rotate and move with scroll
          }}
        >
          <p className='text-center my-8'>Hot Stuff</p>
        </div>
      </div>

      {/* Logo Positioning */}
      <img 
        src={Logo} 
        alt="Logo" 
        className="absolute top-[-70px] sm:top-[-70px] md:top-[-70px] left-1/2 transform -translate-x-1/2 h-24 sm:h-28 md:h-32 lg:h-44" // Increase size on lg screens
      />
    </div>
    </section>
 

<section className="text-center pt-6">
  <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-8xl">
    Everyday pantry goods for the everyday chef.
  </h1>
  <Link to="/ProductCard"> {/* Replace '/shop' with the desired route */}
    <button
      className="bg-[YELLOWGREEN] mt-8 p-2 rounded-full text-lg sm:text-2xl md:text-4xl lg:text-3xl transform transition-all duration-300 hover:translate-y-2 shadow-lg"
      style={{ 
        boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
        transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
    >
      SHOP NOW
    </button>
  </Link>
</section>


<section className="grid grid-cols-3 pt-5 sm:grid-cols-3  lg:grid-cols-6 gap-4 lg:mt-16 mx-auto w-full px-4 overflow-x-hidden">
  {[
    { src: LowSalt, label: "Low Salt" },
    { src: NoBadStuff, label: "No Bad Stuff" },
    { src: Organic, label: "Organic" },
    { src: NonGmo, label: "Non-GMO" },
    { src: NoFakeStuff, label: "No Fake Stuff" },
    { src: LowCarb, label: "Low Carb" },
  ].map((item, index) => (
    <div key={index} className="flex flex-col items-center py-4"> {/* Reduced padding for better alignment */}
      <img src={item.src} alt={item.label} className="w-28 h-auto" />
      <label className="mt-2 text-lg">{item.label}</label>
    </div>
  ))}
</section>


      <div className="text-center">
        <h1 className="text-center mt-6 text-8xl font-bold">Our Goods</h1>
        <p className="mt-4 text-3xl pb-10">
          You'll be cooking like Carmy in no time.
        </p>
        <Cards />
        <p className="hidden sm:block mt-4 text-3xl">
          This vibrant blend of tangy yuzu and bold garlic is your ticket to zesting up any dish.
        </p>
      </div>

      <div className="mt-6">
        <TestimonialSlider />
      </div>

      <section className="w-full overflow-x-hidden">
        <div className="flex flex-col items-center p-8">
          <h2 className="hidden sm:block text-3xl font-bold mb-6">HOW WE STACK UP</h2>
          <div className="overflow-x-auto">
            <table className="hidden sm:block min-w-full border border-black text-center">
              <thead>
                <tr>
                  <th className="px-4 py-6" style={{ border: "none" }}></th>
                  <th className="text-4xl font-extrabold bg-lime-500 text-black py-6 px-4 border-l border-black">
                    HELLA GOODS
                  </th>
                  <th className="text-2xl font-bold border-l border-black py-6 px-4">
                    OTHER HOT SAUCES
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Certified B Corp",
                  "Locally sourced ingredients",
                  "Out of control flavours",
                  "Will make you a better chef",
                ].map((feature, index) => (
                  <tr key={index}>
                    <td className="border-t border-b border-black py-4 px-6 font-semibold">{feature}</td>
                    <td className="bg-lime-500 border-l border-black py-4 text-2xl">
                      <span className="text-4xl">✔️</span>
                    </td>
                    <td className="py-4 text-2xl border-l border-black">
                      <span className="text-4xl">❌</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ProductOfTheMonth />
      </section>

      <section className="relative overflow-hidden bg-gray-900 h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={Video} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="relative max-w-[500px]">
            <div className="relative px-8 py-10 bg-white rounded-[2rem] shadow-lg" 
                 style={{ boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)' }}>
              <h1 className="text-5xl md:text-8xl font-bold text-gray-900">Secret Sauce</h1>
              <p className="text-gray-700 mt-2">This is our special sauce</p>
           <Link to="/Restaurant">   <button 
          className="bg-white w-40 mt-4 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          OUR RESTURENTS
        </button> </Link>
            </div>
          </div>
        </div>
      </section>

      <Food />

      <SecretSauceSection />
      <HatSection/>

      <section>
  <div className="App flex py-7 space-y-10 w-full items-center justify-center">
    <div className="container p-8 rounded-lg max-w-2xl text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-800 whitespace-nowrap">SIGN UP TO OUR NEWSLETTER</h1>
      <p className="text-gray-600 mb-6">Receive special offers and first look at new products.</p>
      <form className="flex space-x-2">
        <input 
          type="email" 
          placeholder="email@example.com" 
          className="flex-1 w-64 px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button 
          className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
