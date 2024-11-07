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
    <div className=" overflow-hidden"> {/* Prevents vertical scrolling */}
  
  <section className="relative p-11 pb-24 flex items-center justify-center">
      {/* Red Background */}
      <div className="absolute inset-0 bg-[red] z-0"></div>

      <div className="relative mt-28 flex justify-center items-center z-10">
        {/* Container for Image and Black Div */}
        <div className="relative w-[300px] lg:w-[800px]">
          {/* Black Div Positioned Behind the Image */}
          <div className="absolute -right-2 -bottom-2 w-[calc(100%-8px)] h-[calc(100%-8px)] bg-black z-[-1] rounded-lg"></div>

          {/* Image Section */}
          <img
            src={hellaHome}
            alt="Hella Home"
            className="w-full h-auto max-h-[600px] rounded-lg z-10" // Control image dimensions
          />

          {/* Right-Side Oval Text Div (Full of Flavour) */}
          <div
            className="absolute hidden lg:block right-[-80px] top-1/3 z-20 bg-[yellowgreen] border border-black px-6 py-3 shadow-md text-center text-3xl text-black w-[200px] h-[120px] overflow-y-auto"
            style={{
              clipPath:
                "polygon(50% 0%, 58% 12%, 68% 8%, 78% 20%, 92% 15%, 85% 35%, 100% 50%, 85% 65%, 92% 85%, 75% 78%, 70% 92%, 60% 85%, 50% 100%, 40% 85%, 30% 92%, 25% 78%, 8% 85%, 15% 65%, 0% 50%, 15% 35%, 8% 15%, 25% 20%, 32% 8%, 42% 12%)",
              top: `${scrollY * 0.2 + 120}px`, // Adjust based on scroll
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
            className="absolute lg:w-44 right-[-80px] top-1/2 transform -translate-y-1/2 w-[150px] z-20 lg:top-[400px] lg:translate-y-0" // Adjust the position on lg screens
            style={{
              transform: `rotate(${90 + scrollY}deg)`, // Correct rotation based on scroll
            }}
          />

          {/* Left-Side Oval Text Div (Hot Stuff) */}
          <div
            className="lg:absolute hidden lg:block left-[-80px] lg:top-32 bg-white shadow-md text-center text-2xl font-bold text-black w-[170px] h-[90px] items-center justify-center z-20"
            style={{
              borderRadius: "100px 100px 0 0",
              transform: `translateY(-${scrollY * 0.3}px) rotate(-35deg)`, // Rotate and move based on scroll
            }}
          >
            <p className="text-center my-8">Hot Stuff</p>
          </div>
        </div>

        {/* Logo Positioning */}
        <img
          src={Logo}
          alt="Logo"
          className="absolute top-[-70px] sm:top-[-70px] md:top-[-70px] left-1/2 transform -translate-x-1/2 h-24 sm:h-28 md:h-32 lg:h-44" // Increase size on lg screens
        />
      </div>

      {/* Wave effect as a bottom border with the same red color as section */}
      <div
        style={{
          position: "absolute",
          bottom: -13, // Position wave at the bottom of the red section
          left: 0,
          right: 0,
          height: "15px", // Height of the wave
          backgroundRepeat: "repeat-x",
          backgroundSize: "20px 20px",
          backgroundImage:
            "radial-gradient(circle at 10px 15px, transparent 12px, red 12px)", // Red wave effect
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15px", // Position the second wave slightly lower
          left: 0,
          right: 0,
          height: "15px", // Height of the second wave
          backgroundRepeat: "repeat-x",
          backgroundSize: "40px 20px",
          backgroundImage:
            "radial-gradient(circle at 10px 0, red 12px, transparent 12px)", // Red wave effect
        }}
      />
    </section>

      {/* Main Heading and Button */}
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

      {/* Product and Feature Sections */}
      <section className="grid grid-cols-3 pt-5 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:mt-16 mx-auto w-full px-4 overflow-x-hidden">
        {[ 
          { src: LowSalt, label: "Low Salt" },
          { src: NoBadStuff, label: "No Bad Stuff" },
          { src: Organic, label: "Organic" },
          { src: NonGmo, label: "Non-GMO" },
          { src: NoFakeStuff, label: "No Fake Stuff" },
          { src: LowCarb, label: "Low Carb" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center py-4">
            <img src={item.src} alt={item.label} className="w-28 h-auto" />
            <label className="mt-2 text-lg">{item.label}</label>
          </div>
        ))}
      </section>

      {/* Cards Section */}
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

      {/* Testimonial Slider */}
      <div className="mt-16 mb-16 px-6">
        <TestimonialSlider />
      </div>

      {/* Product of the Month */}
      <div className="relative mt-12 px-6">
  {/* Your ProductOfTheMonth component */}
  <ProductOfTheMonth />
  
  
</div>

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
          <div className="relative max-w-[500px] w-full">
            <div
              className="relative px-8 py-10 bg-white rounded-[2rem] shadow-lg"
              style={{ boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)" }}
            >
              <h1 className="text-5xl md:text-8xl font-bold text-gray-900">
                Secret Sauce
              </h1>
              <p className="text-gray-700 mt-2">This is our special sauce</p>
              <button
                className="bg-transparent border mt-4 p-2 rounded-full text-black text-2xl transform transition-all duration-300 hover:translate-y-2 shadow-lg"
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
                  transition:
                    "box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "none")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "4px 4px 0px 0px rgba(0, 0, 0, 1)")
                }
              >
                OUR RESTAURANT
              </button>
            </div>
          </div>
        </div>
        
      </section>

      {/* Food Section */}
      <Food />

      {/* Secret Sauce Section */}
      <SecretSauceSection />

      {/* Hat Section */}
      <HatSection />
    </div>
  );
};

export default Home;
