import React, { useState } from "react";

const menuItems = [
  { title: "Home", description: "Go to the homepage." },
  { title: "Trending", description: "See the latest trending videos." },
  { title: "Subscriptions", description: "View your subscribed channels." },
  { title: "Library", description: "Access your saved videos and history." },
];

const NavigationCards = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index); // Toggle information
  };

  return (
    <div className="flex justify-center items-center gap-6 p-6 flex-wrap">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative w-40 h-40 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-transform transform hover:scale-110"
          onClick={() => handleClick(index)}
        >
          <h2 className="text-xl font-semibold">{item.title}</h2>

          {selectedItem === index && (
            <div className="absolute top-full mt-2 w-48 p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-lg">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationCards;
