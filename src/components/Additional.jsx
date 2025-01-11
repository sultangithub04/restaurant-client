import React from "react";
import { FaTruck, FaUtensils, FaChair } from "react-icons/fa";
import Img from '../assets/additional.jpg';

const Additional = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center"
      style={{
        backgroundImage: `url(${Img})`, // Replace with the actual image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our  Deliciousness Recipe
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Sweet | Savory | Drinks
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Delivery Button */}
          <button className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow-lg">
            <FaTruck className="mr-2" /> Delivery
          </button>
          {/* Takeaway Button */}
          <button className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow-lg">
            <FaUtensils className="mr-2" /> Takeaway
          </button>
          {/* Dine-In Button */}
          <button className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow-lg">
            <FaChair className="mr-2" /> Dine-in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Additional;
