import React, { useState } from "react";

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState("food");

  const foodItems = [
    {
      section: "From the Grill",
      items: [
        { name: "Charred Ribeye Steak", price: "$28", description: "12 oz ribeye, garlic butter, rosemary, charred onions" },
        { name: "Grilled Pork Belly Tacos", price: "$22", description: "Crispy pork belly, pickled onions, cilantro, chipotle aioli, corn tortillas" },
        { name: "BBQ Chicken Skewers", price: "$16", description: "Marinated chicken thighs, bell peppers, red onions, BBQ glaze" },
        { name: "Spicy Lamb Chops", price: "$18", description: "Lamb chops, chili rub, mint yogurt, grilled lemon" },
      ],
    },
    {
      section: "From the Smoker",
      items: [
        { name: "Smoked Brisket", price: "$32", description: "Texas-style smoked brisket, BBQ sauce, pickles, white bread" },
        { name: "Smoked Turkey Leg", price: "$24", description: "Smoked turkey leg, honey glaze, smoked paprika rub" },
        { name: "Smoked Sausage Platter", price: "$32", description: "Assorted smoked sausages, mustard, sauerkraut, pickles" },
        { name: "Pulled Pork Sandwich", price: "$18", description: "Smoked pulled pork, coleslaw, pickles, brioche bun" },
        { name: "Burnt Ends", price: "$10", description: "Smoked beef burnt ends, sweet and spicy BBQ sauce" },
        { name: "BBQ Smoked Wings", price: "$18", description: "Smoked chicken wings, BBQ rub, blue cheese dip, celery sticks" },
      ],
    },
  ];

  const drinkItems = [
    {
      section: "Cocktails",
      items: [
        { name: "Margarita", price: "$12", description: "Tequila, lime juice, orange liqueur, salted rim" },
        { name: "Mojito", price: "$10", description: "White rum, mint, lime juice, soda water" },
        { name: "Old Fashioned", price: "$14", description: "Bourbon, sugar, bitters, orange twist" },
      ],
    },
    {
      section: "Wines",
      items: [
        { name: "Chardonnay", price: "$10", description: "Crisp and refreshing white wine with citrus notes" },
        { name: "Cabernet Sauvignon", price: "$12", description: "Full-bodied red wine with dark fruit flavors" },
        { name: "Pinot Noir", price: "$11", description: "Light-bodied red wine with berry aromas" },
      ],
    },
    {
      section: "Beers",
      items: [
        { name: "IPA", price: "$6", description: "Hoppy and bitter with a citrus aroma" },
        { name: "Stout", price: "$7", description: "Rich and dark beer with coffee and chocolate notes" },
        { name: "Lager", price: "$5", description: "Crisp and refreshing beer with a light flavor" },
      ],
    },
    {
      section: "Non-Alcoholic",
      items: [
        { name: "Virgin Pina Colada", price: "$8", description: "Coconut cream, pineapple juice, crushed ice" },
        { name: "Lemonade", price: "$5", description: "Fresh lemons, sugar, water" },
        { name: "Iced Tea", price: "$4", description: "Brewed tea, served chilled with lemon" },
      ],
    },
    {
      section: "Soft Drinks",
      items: [
        { name: "Coca Cola", price: "$3", description: "Classic cola flavor" },
        { name: "Sprite", price: "$3", description: "Lemon-lime flavored soda" },
        { name: "Root Beer", price: "$3", description: "Sweet and creamy root beer soda" },
      ],
    },
  ];

  return (
    <div className="relative bg-yellow-400 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">THE MENU</h1>
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full ${selectedTab === "food" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
          onClick={() => setSelectedTab("food")}
        >
          Food
        </button>
        <button
          className={`px-4 py-2 rounded-full ${selectedTab === "drinks" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
          onClick={() => setSelectedTab("drinks")}
        >
          Drinks
        </button>
      </div>
      <div className="relative flex justify-center items-center z-30 min-h-screen">
        {/* Black background div */}
        <div className="absolute inset-0 top-4 left-2 -bottom-2 -right-3 bg-black rounded-lg"></div>

        {/* Main content with white background */}
        <div className="relative max-w-2xl w-full p-6 z-10 bg-white rounded-lg shadow-lg">
          {/* Wavy SVG at the top border */}
          <div className="absolute top-0 left-0 w-full -mt-1">
            <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0,30 C120,50 240,10 360,30 C480,50 600,10 720,30 C840,50 960,10 1080,30 C1200,50 1320,10 1440,30 L1440,50 L0,50 Z"
                fill="white" /* Matches the white background */
              />
            </svg>
          </div>

          {selectedTab === "food" ? (
            foodItems.map((section) => (
              <div key={section.section} className="mb-4">
                <h2 className="text-xl font-semibold text-center mb-0">{section.section}</h2> {/* Centered title */}
                <div className="border-b border-gray-300 pb-1 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="border-b border-gray-300 pb-2 mb-2">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                        <p className="font-semibold">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            drinkItems.map((section) => (
              <div key={section.section} className="mb-4">
                <h2 className="text-xl font-semibold text-center mb-0">{section.section}</h2> {/* Centered title */}
                <div className="border-b border-gray-300 pb-1 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="border-b border-gray-300 pb-2 mb-2">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                        <p className="font-semibold">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
