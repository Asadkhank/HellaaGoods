import React, { useState } from "react";

const testimonials = [
  {
    text: "This hot sauce is the perfect blend of heat and flavor. It's become a kitchen staple, enhancing every dish without overpowering it. Highly recommend to all spice lovers!",
    author: "Auguste Gusteau",
  },
  {
    text: "Absolutely love this product! It brings the perfect kick to my dishes. A must-have for every meal.",
    author: "Remy the Rat",
  },
  {
    text: "The flavor profile is incredible—balanced and bold without being too overwhelming. Will definitely buy again!",
    author: "Colette Tatou",
  },
  {
    text: "This sauce takes every dish up a notch. My favorite ingredient in the kitchen!",
    author: "Horst",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[limegreen]">
       {/* Rotated Wave Effect at the top */}
       <div
        style={{
          position: "absolute",
          top: -13, // Position wave at the top of the section
          left: 0,
          right: 0,
          height: "15px", // Height of the wave
          backgroundRepeat: "repeat-x",
          backgroundSize: "20px 20px",
          backgroundImage:
            "radial-gradient(circle at 10px 15px, transparent 12px, limegreen 12px)", // Lime color wave effect
          transform: "rotate(180deg)", // Rotates the wave 180 degrees
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-15px", // Position the second wave slightly lower at the top
          left: 0,
          right: 0,
          height: "15px", // Height of the second wave
          backgroundRepeat: "repeat-x",
          backgroundSize: "40px 20px",
          backgroundImage:
            "radial-gradient(circle at 10px 0, limegreen 12px, transparent 12px)", // Lime color wave effect
          transform: "rotate(180deg)", // Rotates the second wave 180 degrees
        }}
      />
      <div className="text-center px-4 md:px-20 py-12 mb-12 max-w-4xl">
        <h2 className="text-lg md:text-2xl font-bold text-black mb-4">
          WORD ON THE STREET
        </h2>
        <p className="text-4xl text-center text-black font-bold mb-4">
          ★★★★★
        </p>
        <blockquote className="text-2xl md:text-4xl font-extrabold text-black leading-snug">
          “{testimonials[currentIndex].text}”
        </blockquote>
        <p className="mt-4 font-semibold text-black">
          {testimonials[currentIndex].author.toUpperCase()}
        </p>
      </div>

      {/* Arrow Buttons positioned on the right with spring effect on hover */}
      <div className="absolute right-8 flex space-x-4 bottom-8">
        <button
          onClick={prevTestimonial}
          className="bg-white p-2 rounded-full text-black text-2xl transform transition-all duration-300 hover:translate-y-2 shadow-lg"
          style={{
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          &#8592;
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-white p-2 rounded-full text-black text-2xl transform transition-all duration-300 hover:translate-y-2 shadow-lg"
          style={{
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          &#8594;
        </button>
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
            "radial-gradient(circle at 10px 15px, transparent 12px, limeGreen 12px)", // Red wave effect
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
            "radial-gradient(circle at 10px 0, limeGreen 12px, transparent 12px)", // Red wave effect
        }}
      />
     
    </div>
  );
};

export default TestimonialSlider;
