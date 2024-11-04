import React from "react";
import { Link } from "react-router-dom";
import Pina from '../assets/Pina.webp'; // Ensure this image exists
import tacos from '../assets/tacos.webp'; // Make sure to import the tacos image
import { FaUtensils, FaClock, FaSeedling, FaArrowRight } from "react-icons/fa";

const PinaGrilled = () => {
  return (
    <>
      <div className="flex flex-col bg-[yellow] lg:flex-row w-full items-center lg:items-start relative">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 my-auto flex flex-col items-center lg:items-start justify-center text-start mx-auto px-4 lg:px-8 font-bold text-4xl md:text-6xl lg:text-7xl">
          <h1 className="mx-auto text-center lg:text-start mb-4">
            Piña Picante Grilled Shrimp Skewers
          </h1>

          {/* Icons Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
            {/* Serve Icon */}
            <div className="flex items-center text-center">
              <FaUtensils className="text-3xl lg:text-4xl mr-2" />
              <p className="text-sm lg:text-base">8-10 Serves</p>
            </div>

            {/* Time Icon */}
            <div className="flex items-center text-center">
              <FaClock className="text-3xl lg:text-4xl mr-2" />
              <p className="text-sm lg:text-base">30 Minutes</p>
            </div>

            {/* Nut-Free Icon */}
            <div className="flex items-center text-center">
              <FaSeedling className="text-3xl lg:text-4xl mr-2" />
              <p className="text-sm lg:text-base">Nut Free</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:mt-14 lg:w-1/2 p-4 lg:p-8">
          <div className="relative">
            <div className="absolute inset-0 top-2 rounded-3xl left-2 -right-2 -bottom-2 -z-10 bg-black"></div>
            <img
              src={Pina}
              alt="Pina Picante Grilled"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:flex lg:p-24 p-4 mt-8">
        {/* Left side div with black background */}
        <div className="flex flex-col">
          <div className="relative w-72 lg:mr-16">
            <div className="absolute top-2 left-2 h-full w-full bg-black rounded-lg -z-10"></div>
            <div className="relative flex z-10 p-6 border-[2px] border-black bg-white rounded-lg shadow-md">
              <img src={tacos} alt="El Diablo Hot Sauce" className="w-20 h-20 border-[2px] border-black rounded" />
              <div className="ml-3 flex flex-col justify-center items-start">
                <h3 className="text-lg font-medium">EL DIABLO HOT SAUCE</h3>
                <p className="text-xl text-gray-600">$20</p>
              </div>
              <div className="ml-auto flex items-center">
                <button className="text-2xl font-bold text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="relative mt-10 w-72 lg:mr-16">
            <div className="absolute top-2 left-2 h-full w-full bg-black rounded-lg -z-10"></div>
            <div className="relative z-10 p-6 border-[2px] border-black bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <ul className="list-disc ml-6">
                <li>1 lb (450g) chicken breasts, thinly sliced</li>
                <li>2 tablespoons olive oil</li>
                <li>3 tablespoons El Diablo Hot Sauce Extra Hot</li>
                <li>1 teaspoon cumin</li>
                <li>1 teaspoon smoked paprika</li>
                <li>1 teaspoon garlic powder</li>
                <li>1/2 teaspoon salt</li>
                <li>1/2 teaspoon black pepper</li>
                <li>8 small corn or flour tortillas</li>
                <li>1 cup shredded lettuce</li>
                <li>1/2 cup diced tomatoes</li>
                <li>1/2 cup shredded cheddar cheese</li>
                <li>1/4 cup chopped fresh cilantro</li>
                <li>1 avocado, sliced</li>
                <li>Lime wedges for serving</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side div with black background and scrolling content */}
        <div className="relative w-72 lg:mt-0 mt-10 lg:w-2/3">
          <div className="absolute top-2 left-2 h-full w-full bg-black rounded-lg -z-10"></div>
          <div className="relative z-10 overflow-y-auto p-6 border-[2px] border-black bg-white rounded-lg shadow-md">
            <p>
              Are you ready to take your taco night to the next level? Our Spicy El Diablo Hot Sauce Chicken Tacos are the perfect way to add a fiery kick to your dinner routine. Featuring the intense heat of El Diablo Hot Sauce Extra Hot, these tacos are not for the faint of heart. Juicy marinated chicken slices are cooked to perfection and topped with fresh, vibrant ingredients for a dish that's as colorful as it is flavorful. Whether you're a heat seeker or just looking to spice up your meal, these tacos are sure to impress.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-4">Instructions</h2>
            <h3 className="text-xl font-bold mb-2">1. Marinate the Chicken:</h3>
            <ul className="list-disc ml-6">
              <li>In a large bowl, combine the sliced chicken, olive oil, El Diablo Hot Sauce Extra Hot, cumin, smoked paprika, garlic powder, salt, and black pepper. Mix well to ensure the chicken is evenly coated. Cover and let it marinate for at least 30 minutes, or up to 2 hours in the refrigerator.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">2. Cook the Chicken:</h3>
            <ul className="list-disc ml-6">
              <li>Heat a grill or skillet over medium-high heat. Cook the marinated chicken for about 6-8 minutes, or until cooked through and slightly charred. Remove from heat and let rest for a few minutes.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">3. Prepare the Toppings:</h3>
            <ul className="list-disc ml-6">
              <li>While the chicken is cooking, prepare your toppings by chopping the lettuce, tomatoes, and cilantro. Slice the avocado and set everything aside.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">4. Assemble the Tacos:</h3>
            <ul className="list-disc ml-6">
              <li>Warm the tortillas in a pan or microwave. Layer the cooked chicken, lettuce, tomatoes, cheese, avocado, and cilantro on each tortilla.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">5. Serve:</h3>
            <ul className="list-disc ml-6">
              <li>Serve the tacos with lime wedges on the side for squeezing over the top. Enjoy your spicy El Diablo Hot Sauce Chicken Tacos!</li>
            </ul>

            <h3 className="text-2xl my-5 font-bold mb-2">Cooking Time:</h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>Marinating time: 30 minutes to 2 hours</li>
              <li>Grilling time: 4-6 minutes</li>
              <li>Total cooking time: Approximately 40 minutes to 2 hours and 10 minutes (including marinating)</li>
            </ul>

            <h3 className="text-2xl my-5 font-bold mb-2">Servings:</h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>This recipe serves approximately 4 people.</li>
            
            </ul>

          </div>
        </div>
      </div>

      {/* Arrow Button outside of PulledPork component */}
      <div className="flex justify-end mb-12 mr-24 mt-4">
        <Link to="/crispynoodles"><button 
          className="bg-white text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.4)' 
          }}
        >
          <FaArrowRight />
        </button></Link>
      </div>
    </>
  );
};

export default PinaGrilled;
