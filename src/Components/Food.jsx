import React from "react";
import foodpic from '../assets/meet.webp'; // Ensure this path is correct
import { Link } from "react-router-dom";

const Food = () => {
  const recipes = [
    {
      title: "Taco Salad",
      briefDescription: "A fresh and vibrant taco salad loaded with toppings.",
      detailedDescription: "This taco salad features crisp lettuce, seasoned ground beef, and a variety of toppings including cheese, salsa, and avocado.",
      image: foodpic
    },
    {
      title: "Chicken Enchiladas",
      briefDescription: "Savory enchiladas stuffed with tender chicken and smothered in sauce.",
      detailedDescription: "Enjoy these cheesy chicken enchiladas topped with a rich enchilada sauce and baked to perfection.",
      image: foodpic
    },
    {
      title: "Veggie Quesadillas",
      briefDescription: "Delicious quesadillas filled with fresh veggies and melted cheese.",
      detailedDescription: "These veggie quesadillas are packed with colorful vegetables and melted cheese, perfect for a quick meal.",
      image: foodpic
    }
  ];

  return (
    <section className="relative">
      <div className="bg-[yellow] min-h-screen relative">
        {/* Wavy Background at Top */}
        <div
          style={{
            position: "absolute",
            top: -13,
            left: 0,
            right: 0,
            height: "15px",
            backgroundRepeat: "repeat-x",
            backgroundSize: "20px 20px",
            backgroundImage: "radial-gradient(circle at 10px 15px, transparent 12px, yellow 12px)",
            transform: "rotate(180deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: 0,
            right: 0,
            height: "15px",
            backgroundRepeat: "repeat-x",
            backgroundSize: "40px 20px",
            backgroundImage: "radial-gradient(circle at 10px 0, yellow 12px, transparent 12px)",
            transform: "rotate(180deg)",
          }}
        />

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row justify-center items-center py-16 h-screen">
          {/* Text Section */}
          <div className="text-left pr-8 z-10 flex flex-col justify-center mb-8 sm:mb-0">
            <h2 className="text-5xl sm:text-8xl font-bold mb-2">
              PULLED <br /> PORK <br /> TACOS
            </h2>
            <p className="text-lg mb-4">
              Enjoy every bite of this delicious spicy pulled pork tacos.
            </p>
            <Link to="/PulledPork">
              <button
                className="bg-white w-32 text-black font-bold py-1 px-2 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
                style={{
                  boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
                  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
              >
                View Recipe
              </button>
            </Link>
          </div>

          {/* Image with Zigzag Effect and Shadow */}
          <div className="relative w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] flex items-center justify-center">
            <img
              src={foodpic}
              alt="Delicious Pulled Pork Tacos served with fresh ingredients."
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transition-shadow duration-300"
              style={{
                clipPath: "polygon(0 0, 10% 20%, 0% 40%, 10% 60%, 0% 80%, 10% 100%, 100% 100%, 90% 80%, 100% 60%, 90% 40%, 100% 20%, 90% 0%)",
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                borderRight: '5px solid black',
                borderBottom: '5px solid black',
              }}
            />
          </div>
        </div>

        {/* More Recipes Section */}
        <div className="text-center my-12">
          <h3 className="text-2xl font-bold mb-8">MORE RECIPES</h3>
          <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
            {/* Recipe Items */}
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="w-full sm:w-[400px] h-[400px] overflow-hidden rounded-lg shadow-2xl"
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                  borderRight: '5px solid black',
                  borderBottom: '5px solid black'
                }}
              >
                <img
                  src={recipe.image}
                  alt={`Recipe ${index + 1}: ${recipe.title}`}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: "polygon(0 0, 10% 20%, 0% 40%, 10% 60%, 0% 80%, 10% 100%, 100% 100%, 90% 80%, 100% 60%, 90% 40%, 100% 20%, 90% 0%)",
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                    borderRight: '5px solid black',
                    borderBottom: '5px solid black'
                  }}
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{recipe.title}</h4>
                  <p className="text-sm mb-2">{recipe.briefDescription}</p>
                  <p className="text-sm text-gray-600 mt-2">{recipe.detailedDescription}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Text Below Recipes */}
          <button
            className="bg-white text-black my-11 font-bold py-2 px-4 rounded-2xl border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
            style={{
              boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
              transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
          >
            READ MORE
          </button>
        </div>

        {/* Wavy Background at Bottom (Same as Top) */}
        <div
          style={{
            position: "absolute",
            bottom: -13,
            left: 0,
            right: 0,
            height: "15px",
            backgroundRepeat: "repeat-x",
            backgroundSize: "20px 20px",
            backgroundImage: "radial-gradient(circle at 10px 15px, transparent 12px, yellow 12px)",
            transform: "rotate(360deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15px",
            left: 0,
            right: 0,
            height: "15px",
            backgroundRepeat: "repeat-x",
            backgroundSize: "40px 20px",
            backgroundImage: "radial-gradient(circle at 10px 0, yellow 12px, transparent 12px)",
            transform: "rotate(360deg)",
          }}
        />
      </div>
    </section>
  );
};

export default Food;
