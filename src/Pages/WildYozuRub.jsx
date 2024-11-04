import React, { useState } from 'react';
import chilli from '../assets/blackchili.webp';
import chilli2 from '../assets/blackchili1.webp';
import LowSalt from "../assets/LowSalt.jpg";
import NoBadStuff from "../assets/NoBadStuff.png";
import Organic from "../assets/organic.png";
import NonGmo from "../assets/NonGmo.png";
import NoFakeStuff from "../assets/NoFakeStuff.webp";
import LowCarb from "../assets/LowCarb.webp";

// pics for cards
import wildwhite from '../assets/pack11.webp';
import wildred from '../assets/wildred.webp';
import whiterub from '../assets/hellopack.webp';
import redrub from '../assets/pack.webp';
import Whiteumami from '../assets/bottle22.webp';
import Redumami from '../assets/bottle2.webp';

const WildYozuRub = () => {
  const [mainImage, setMainImage] = useState(chilli);
  const [activeTab, setActiveTab] = useState('ingredients');

  // New state variables for product selection
  const [selectedWild, setSelectedWild] = useState(false);
  const [selectedRub, setSelectedRub] = useState(false);
  const [selectedUmami, setSelectedUmami] = useState(false);

  const tabContent = {
    ingredients: 'CHILI PEPPERS, GARLIC, SHALLOTS, SOY SAUCE, SALT, VEGETABLE OIL, AND SPICES.',
    shipping: 'Shipping is available worldwide. Estimated delivery time is 5-10 business days.',
    wholesale: 'Wholesale options are available for bulk orders. Please contact us for more details.',
  };

  const flavorRatings = {
    sweet: 2,
    salty: 1,
    sour: 0,
    bitter: 0,
    umami: 0,
  };

  return (
    <>
      <div className="py-8 mt-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase mb-8">Product of the Month</h2>
        
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 px-4 bg-white">
          {/* Left Section - Main Image and Thumbnail Images Below */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="relative">
              <div className="p-2 border-4 border-black rounded-md">
                <img
                  src={mainImage}
                  alt="Crispy Chili Oil"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-4">
              {[chilli, chilli2].map((image, idx) => (
                <div className="relative" key={idx}>
                  <img
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-2 rounded-full cursor-pointer"
                    onClick={() => setMainImage(image)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="max-w-md text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-extrabold uppercase mb-4">Crispy Chili Oil</h1>
            <p className="text-xl font-semibold mb-4">$12.00</p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Deliciously fiery and surprisingly versatile! Bold, aromatic chilies get a savory boost from garlic and shallots, while a hint of soy sauce adds a delightful umami depth.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <button className="border border-black text-black py-2 rounded-full hover:bg-gray-200">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white py-2 rounded-full hover:bg-green-600">
                Buy It Now
              </button>
            </div>

            {/* Tabs Section */}
            <div className="flex justify-center lg:justify-start gap-4 mb-4">
              {['ingredients', 'shipping', 'wholesale'].map((tab) => (
                <button
                  key={tab}
                  className={`text-base md:text-lg ${activeTab === tab ? 'border-b-2 border-black font-bold' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="text-gray-700 text-sm md:text-base mb-4">
              {tabContent[activeTab]}
            </div>

            {/* Flavor Ratings Section */}
            <div className="text-left mb-4">
              <h3 className="text-lg font-bold mb-2">FLAVOR RATINGS:</h3>
              {Object.entries(flavorRatings).map(([flavor, rating]) => (
                <div key={flavor} className="flex justify-between items-center mb-2">
                  <span className="font-semibold mr-2 capitalize">{flavor.toUpperCase()}:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full border-2 ${index < rating ? 'bg-black' : 'bg-white'} cursor-default`}
                        style={{ borderColor: 'black' }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section with Tagline */}
        <section className="py-6 md:py-10 bg-yellow-500 flex items-center justify-center">
          <p className="font-bold text-2xl md:text-4xl lg:text-5xl text-center px-4">
            We specialize in crafting bold spices, tantalizing hot sauces, and gourmet seasonings.
          </p>
        </section>

        {/* Product Cards Section */}
        <div className="flex flex-wrap py-16 bg-yellow-100 justify-center gap-8">
          {[{ img: selectedWild ? wildred : wildwhite, title: 'WILD PRODUCT', price: 50 },
            { img: selectedRub ? redrub : whiterub, title: 'RUB PRODUCT', price: 20 },
            { img: selectedUmami ? Redumami : Whiteumami, title: 'UMAMI PRODUCT', price: 30 }].map((product, idx) => (
              <div
                key={idx}
                className="relative p-4 border border-black w-80 md:w-1/3 lg:w-1/4"
              >
                <img
                  src={product.img}
                  alt={`${product.title}`}
                  className="w-full h-auto object-cover border border-black transform hover:scale-110 transition-transform"
                  onMouseEnter={() => {
                    if (idx === 0) setSelectedWild(true);
                    else if (idx === 1) setSelectedRub(true);
                    else setSelectedUmami(true);
                  }}
                  onMouseLeave={() => {
                    if (idx === 0) setSelectedWild(false);
                    else if (idx === 1) setSelectedRub(false);
                    else setSelectedUmami(false);
                  }}
                />
                <h2 className="mt-4 font-semibold">{product.title}</h2>
                <p className="text-gray-700">${product.price}.00</p>
                <button
                  onClick={() => alert('Added to Cart!')}
                  className="px-4 py-2 bg-black text-white border border-black rounded-full mt-4 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WildYozuRub;
