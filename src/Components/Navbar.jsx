import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaLock, FaBars, FaTimes } from "react-icons/fa";
import RedVerginOil from '../assets/BlackChili.webp';

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setShowOptions(false);
    setShowSearchBox(false); // Close search box when menu is closed
  };

  const handleSearchClick = () => {
    setShowSearchBox((prev) => !prev);
  };

  const closeSearchBox = () => {
    setShowSearchBox(false); // Close the search box
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) closeMenu();
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && window.innerWidth >= 1024) {
        setShowOptions(false);
      }
      if (showSearchBox && !document.getElementById('searchBox').contains(event.target)) {
        closeSearchBox(); // Close search box if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, showOptions, showSearchBox]);

  const handleLockClick = () => {
    navigate('/add-to-cart');
  };

  const isHomePage = location.pathname === "/";
  const isRestaurantPage = location.pathname === "/restaurant";
  const isAboutPage = location.pathname === "/about"; // Check if on About page

  const navbarClasses = `${isHomePage ? (isMenuOpen ? "bg-white" : "bg-transparent") : "bg-white"} ${
    isVisible ? "top-0" : "-top-full"
  } fixed w-full p-4 transition-transform duration-300 z-40`; // Increased z-index for Navbar

  return (
    <nav className={navbarClasses}>
      <ul className="flex justify-between items-center">
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-gray-800">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <li className="flex items-center space-x-4 relative">
          <button onClick={toggleOptions} className="text-gray-800 focus:outline-none hidden lg:block">
            Shops
          </button>
          {showOptions && (
            <div ref={dropdownRef} className="absolute py-6 lg:flex -left-6 z-50 top-full bg-white rounded-md mt-2 flex flex-col items-center">
              <ul className="flex space-x-4">
                {[...Array(6)].map((_, i) => (
                  <li key={i}>
                    <Link
                      to="/wildyozurub"
                      onClick={closeMenu}
                      className="block text-black rounded-2xl shadow-lg w-52 text-center hover:bg-gray-600 p-2"
                    >
                      <div>
                        <img src={RedVerginOil} alt="" className="border w-72 h-56 border-black rounded-lg border-[4px]" />
                        <p> CRISPY CHILI OIL</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/productcard">
                <button
                  onClick={closeMenu}
                  className="bg-white text-black font-bold py-2 px-4 mt-4 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
                  style={{
                    boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
                    transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
                >
                  READ MORE
                </button>
              </Link>
            </div>
          )}
          <Link to="/restaurant" className="text-gray-800 hidden lg:block">Restaurant</Link>
          <Link to="/recipes" className="text-gray-800 hidden lg:block">Recipes</Link>
          <Link to="/about" className="text-gray-800 hidden lg:block">About</Link>
        </li>
        <li className="flex-grow text-center">
          <Link to="/" className="text-gray-800 text-lg">Hellagoods</Link>
        </li>
        <li className="flex items-center space-x-4 ml-auto lg:pr-3">
          <FaSearch className="text-gray-800 cursor-pointer" onClick={handleSearchClick} />
          <FaLock className="text-gray-800 cursor-pointer" onClick={handleLockClick} />
          <Link to="/productcard">
            <button
              className="hidden lg:block bg-white text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
              style={{ boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.4)' }}
            >
              Shop now
            </button>
          </Link>
        </li>
      </ul>

      {/* Conditionally apply wave effect on Restaurant and About pages */}
      {(isRestaurantPage || isAboutPage) && (
        <>
          <div
            style={{
              position: "absolute",
              bottom: -13, // Position wave at the bottom of the navbar
              left: 0,
              right: 0,
              height: "15px", // Height of the wave
              backgroundRepeat: "repeat-x",
              backgroundSize: "20px 20px",
              backgroundImage: "radial-gradient(circle at 10px 15px, transparent 12px, white 12px)", // Red wave effect
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
              backgroundImage: "radial-gradient(circle at 10px 0, white 12px, transparent 12px)", // Red wave effect
            }}
          />
        </>
      )}

      {/* Search Box within Navbar */}
      {showSearchBox && (
        <div id="searchBox" className="absolute top-full left-0 right-0 bg-white p-4 shadow-md z-50">
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Search..."
              className="bg-gray-200 text-black p-2 rounded-md w-full mr-2" 
              onBlur={closeSearchBox} // Close on blur
            />
            <button onClick={closeSearchBox} className="text-red-500 font-bold">Close</button>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div ref={menuRef} className="lg:hidden absolute top-16 left-0 w-full bg-white text-gray-800 shadow-md p-4 space-y-2 z-30">
          <Link to="/productcard" onClick={closeMenu} className="block p-2 hover:bg-gray-200">Shops</Link>
          <Link to="/restaurant" onClick={closeMenu} className="block p-2 hover:bg-gray-200">Restaurant</Link>
          <Link to="/recipes" onClick={closeMenu} className="block p-2 hover:bg-gray-200">Recipes</Link>
          <Link to="/about" onClick={closeMenu} className="block p-2 hover:bg-gray-200">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
