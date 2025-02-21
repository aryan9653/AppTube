import { useState } from "react";

const menuItems = [
  { name: "Home", description: "Go to the homepage" },
  { name: "Trending", description: "See the latest trending videos" },
  { name: "Subscriptions", description: "Check your subscribed channels" },
  { name: "Library", description: "View your saved videos & history" },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-64 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-transform transform hover:scale-105 cursor-pointer
              ${selected === item.name ? "border border-blue-500" : ""}`}
            onClick={() => setSelected(item.name)}
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            {selected === item.name && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
