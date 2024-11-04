import { useState, useEffect } from 'react';
import Wbottle from '../assets/Wbottle.webp';

function SecretSauceSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-0">
        <h1
          className="text-3xl md:text-4xl z-10 font-bold text-black mb-8"
          style={{ transform: `translateY(${scrollY * 0.8}px)` }}
        >
          THE SECRET SAUCE
        </h1>

        {/* Internal CSS for Star Shape */}
        <style>
          {`
            .star-shape {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(45deg);
              width: 900px; /* Adjust the width of the star */
              height: 900px; /* Increased height of the star */
              clip-path: polygon(
                50% 0%, 61% 35%, 98% 35%, 68% 57%,
                79% 91%, 50% 70%, 21% 91%, 32% 57%,
                2% 35%, 39% 35%
              );
              background-color: rgba(40, 167, 69, 0.7); /* Green background with some transparency */
              z-index: 0; /* Positioned behind the image */
            }
          `}
        </style>

        <div className="flex flex-col items-center w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-start w-full">
            <div className="flex flex-col text-center items-start space-y-4 col-span-2 my-auto">
              <div className="relative text-center border-black border-2 rounded bg-white p-4 shadow-lg">
                <div className="absolute w-full rounded h-[95%] -z-10 -right-[8px] bg-black" />
                <h2 className="font-bold text-xl md:text-3xl">100% EXTRA VIRGIN OLIVE OIL</h2>
                <p className="text-sm md:text-base">Made from Italian olives, ensuring a pure and premium product.</p>
              </div>
              <div className="relative border-black border-2 rounded bg-white p-4 shadow-lg">
                <div className="absolute w-full rounded h-[95%] -z-10 -right-[8px] bg-black" />
                <h2 className="font-bold text-xl md:text-3xl">HIGH YIELD</h2>
                <p className="text-sm md:text-base">It takes about 6 pounds of olives to produce one liter of oil.</p>
              </div>
              <div className="relative border-black border-2 rounded bg-white p-4 shadow-lg">
                <div className="absolute w-full rounded h-[95%] -z-10 -right-[8px] bg-black" />
                <h2 className="font-bold text-xl md:text-3xl">SINGLE-ORIGIN</h2>
                <p className="text-sm md:text-base">Sourced exclusively from a single Italian region to guarantee rich flavor.</p>
              </div>
            </div>

            {/* Center Image with Star Shape as Background */}
            <div className="col-span-3 flex items-center justify-center relative">
              <div className="star-shape" /> {/* Star shape background */}
              <img
                src={Wbottle}
                alt="Hella Goods Olive Oil"
                className="w-40 md:w-80 relative z-10" // Image on top
              />
            </div>

            <div className="flex flex-col text-center items-start space-y-4 col-span-2 my-auto">
              <div className="relative border-black border-2 rounded bg-white p-4 shadow-lg">
                <div className="absolute w-full rounded h-[95%] -z-10 -right-[8px] bg-black" />
                <h2 className="font-bold text-xl md:text-3xl">HARVESTED AT PEAK SEASON</h2>
                <p className="text-sm md:text-base">Olives are picked during peak ripeness, providing a balanced, fresh flavor.</p>
              </div>
              <div className="relative border-black border-2 rounded bg-white p-4 shadow-lg">
                <div className="absolute w-full rounded h-[95%] -z-10 -right-[8px] bg-black" />
                <h2 className="font-bold text-xl md:text-3xl">VERSATILE COOKING</h2>
                <p className="text-sm md:text-base">Ideal for various cooking needs like roasting, frying, and baking due to its high smoke point.</p>
              </div>
              <div className="relative border-black border-2 rounded bg-white p-4 shadow-lg">
                <div className="absolute w-full rounded h-[95%] -z-10 -right-[8px] bg-black" />
                <h2 className="font-bold text-xl md:text-3xl">ECO-FRIENDLY PACKAGING</h2>
                <p className="text-sm md:text-base">Contains recyclable materials, reducing waste.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecretSauceSection;
