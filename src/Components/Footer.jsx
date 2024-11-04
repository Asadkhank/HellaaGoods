// src/Footer.jsx
import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import VisaIcon from '../assets/visaicon.png'; // Replace with actual path
import MasterCardIcon from '../assets/mastercard.png';
import AmexIcon from '../assets/amex.png'; 
import PaypalIcon from '../assets/paypal.png';
import DiscoverIcon from '../assets/discover.png';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#ff0005] text-white py-10">
      <div className="container mx-auto px-6 flex flex-wrap justify-between">
        {/* Left Section */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <p className="text-sm text-center md:text-left">
            This is a demo store. Hella Goods packaging design by James Karanikos.
          </p>
          <div className="flex space-x-4 text-xl justify-center md:justify-start">
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
            <FaWhatsapp />
          </div>
          <p className="text-sm text-center md:text-left">© 2024, Hella Goods. Powered by Shopify</p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-4 text-sm w-full md:w-1/3">
          <div className="space-y-2">
            <p>Shop</p>
            <p>Restaurant</p>
            <p>Recipes</p>
            <p>About</p>
          </div>
          <div className="space-y-2">
            <p>Search</p>
            <p>Shipping</p>
            <p>Returns</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/3">
          <h2 className="text-lg font-bold text-center">SIGN UP TO OUR NEWSLETTER</h2>
          <form className="flex flex-col items-center space-y-2 w-full">
            <input
              type="email"
              placeholder="email@example.com"
              className="p-2 rounded-full w-full md:w-96 border border-black text-black"
            />
            <button className="bg-white w-full text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200">
              SUBSCRIBE
            </button>
          </form>
          {/* Payment Icons */}
          <div className="flex justify-center space-x-2 mt-4">
            <img src={VisaIcon} alt="Visa" className="w-10" />
            <img src={MasterCardIcon} alt="MasterCard" className="w-10" />
            <img src={AmexIcon} alt="Amex" className="w-10" />
            <img src={PaypalIcon} alt="PayPal" className="w-10" />
            <img src={DiscoverIcon} alt="Discover" className="w-10" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img src={logo} alt="Logo" className='' /> {/* Adjust size as necessary */}
      </div>
    </footer>
  );
};

export default Footer;
