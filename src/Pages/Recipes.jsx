import React from 'react';
import { Link } from 'react-router-dom';
import foodpic1 from '../assets/meet.webp'; // First image
import foodpic2 from '../assets/meet.webp'; // Second image (update path as necessary)
import foodpic3 from '../assets/meet.webp'; // Third image (update path as necessary)
import foodpic4 from '../assets/meet.webp'; // Fourth image (update path as necessary)

const Recipes = () => {
  const dishes = [
    { name: "Pulled Pork Tacos", image: foodpic1, link: "/pulledpork" },
    { name: "Pina Grilled", image: foodpic2, link: "/pinagrilled" },
    { name: "Crispy Noodles", image: foodpic3, link: "/crispynoodles" },
    { name: "Dish 4", image: foodpic4, link: "/pulledpork" }, // Replace with actual link
  ];

  return (
    <div className="p-4 sm:p-8 bg-yellow-400 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {dishes.map((dish, index) => (
          <Link to={dish.link} key={index} className="relative flex flex-col items-center">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-auto max-h-[700px] object-cover rounded-lg shadow-2xl transition-shadow duration-300"
              style={{
                clipPath: "polygon(0 0, 10% 20%, 0% 40%, 10% 60%, 0% 80%, 10% 100%, 100% 100%, 90% 80%, 100% 60%, 90% 40%, 100% 20%, 90% 0%)",
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              }}
            />
            <h2 className="mt-2 text-lg font-semibold text-center">{dish.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
