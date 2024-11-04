import React from "react";
import tacos from "../assets/tacos.webp";
import { Link } from "react-router-dom";
import { FaUtensils, FaClock, FaSeedling, FaArrowRight } from "react-icons/fa";

const PulledPork = () => {
  return (
    <>
      <div className="flex flex-col bg-[yellow] lg:flex-row w-full items-center lg:items-start relative">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 my-auto flex flex-col items-center lg:items-start justify-center text-start mx-auto px-4 lg:px-8 font-bold text-4xl md:text-6xl lg:text-8xl">
          <h1 className="mx-auto text-center lg:text-start mb-4">
            Pulled Pork Tacos
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
            <div className="absolute inset-0 top-3 rounded-3xl left-2 -right-2 -bottom-2 -z-10 bg-black"></div>
            <img
              src={tacos}
              alt="Pulled Pork Tacos"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:flex lg:p-24 p-4 mt-8">
        {/* Left side div with black background */}
        <div className="">
          <div className="relative w-72 lg:mr-16">
            <div className="absolute top-2 left-2 h-full w-full bg-black rounded-lg -z-10"></div>
            <div className="relative flex z-10 p-6 border-[2px] border-black bg-white rounded-lg shadow-md">
              <img src={tacos} alt="" className="w-20 h-20 border-[2px] border-black rounded" />
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
            <div className="absolute top-2 left-2 h-[100%] w-full bg-black rounded-lg -z-10"></div>
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
            <h3 className="text-xl font-bold mb-2">Cook the Chicken:</h3>
            <ul className="list-disc ml-6">
              <li>In a large bowl, combine the sliced chicken, olive oil, El Diablo Hot Sauce Extra Hot, cumin, smoked paprika, garlic powder, salt, and black pepper. Mix well to ensure the chicken is evenly coated. Cover and let it marinate for at least 30 minutes, or up to 2 hours in the refrigerator.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">Prepare the Toppings:</h3>
            <ul className="list-disc ml-6">
              <li>In a large bowl, combine the sliced chicken, olive oil, El Diablo Hot Sauce Extra Hot, cumin, smoked paprika, garlic powder, salt, and black pepper. Mix well to ensure the chicken is evenly coated. Cover and let it marinate for at least 30 minutes, or up to 2 hours in the refrigerator.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">Assemble the Tacos:</h3>
            <ul className="list-disc ml-6">
              <li>In a large bowl, combine the sliced chicken, olive oil, El Diablo Hot Sauce Extra Hot, cumin, smoked paprika, garlic powder, salt, and black pepper. Mix well to ensure the chicken is evenly coated. Cover and let it marinate for at least 30 minutes, or up to 2 hours in the refrigerator.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">Serve:</h3>
            <ul className="list-disc ml-6">
              <li>In a large bowl, combine the sliced chicken, olive oil, El Diablo Hot Sauce Extra Hot, cumin, smoked paprika, garlic powder, salt, and black pepper. Mix well to ensure the chicken is evenly coated. Cover and let it marinate for at least 30 minutes, or up to 2 hours in the refrigerator.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Arrow Button outside of PulledPork component */}
      <div className="flex justify-end mb-12 mr-24 mt-4">
       
     <Link to="/pinagrilled"> <button 
          className="bg-white  text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
         <FaArrowRight />
        </button>
        </Link>  
      </div>
    </>
  );
};

export default PulledPork;
