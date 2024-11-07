import React from "react";
import Plate from "../assets/plate.webp"; // Ensure the path is correct
import Video from "../assets/video.webm"; // Ensure the path is correct
import foodpic from "../assets/meet.webp"; // Ensure the path is correct

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={Plate}
          alt="Plate"
          className="object-cover w-full h-[300px] md:h-[450px]" // Set a specific height for mobile
        />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="relative max-w-[400px] w-full">
            <div
              className="relative px-8 py-4 bg-white rounded-[2rem] shadow-lg"
              style={{ boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)" }}
            >
              <h1 className="text-3xl md:text-7xl font-bold text-gray-900">
                HELLA GOOD STORY
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-yellow-500 flex items-center justify-center">
        <p className="font-bold text-4xl md:text-6xl text-center px-4">
          We specialize in crafting bold spices, tantalizing hot sauces, and
          gourmet seasonings that elevate every dish.
        </p>
      </section>

      <section className="py-14">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-center flex flex-col ml-3 justify-center">
            <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
            <p className="mt-3">
              Hella Goods was born from a love for big, bold flavors. What started in a small kitchen with a few spice blends has grown into a full line of products, each crafted with care and precision. From our Crispy Chili Oil to our signature El Diablo Hot Sauce, we’re all about delivering unforgettable taste experiences.
            </p>
          </div>
          <div className="flex justify-center mt-5 md:mt-0">
            <div className="relative w-full md:w-[600px] h-[300px] md:h-[500px] flex items-center justify-center">
              <img
                src={foodpic}
                alt="Delicious Pulled Pork Tacos served with fresh ingredients."
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transition-shadow duration-300"
                style={{
                  clipPath:
                    "polygon(0 0, 10% 20%, 0% 40%, 10% 60%, 0% 80%, 10% 100%, 100% 100%, 90% 80%, 100% 60%, 90% 40%, 100% 20%, 90% 0%)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
                  borderRight: "5px solid black",
                  borderBottom: "5px solid black",
                }}
              />
            </div>
          </div>
        </div>
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
    </>
  );
};

export default About;
