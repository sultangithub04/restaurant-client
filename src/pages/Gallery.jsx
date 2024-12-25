


import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://i.ibb.co.com/VmnmdPh/Cheese-Omlette-400x400.jpg",
    "https://i.ibb.co.com/98y8js6/Breakfast-Wholesome-1-400x400.jpg",
    "https://i.ibb.co.com/C9YgLvj/Croque-Madame-400x400.jpg",
    "https://i.ibb.co.com/7SvxfC8/Croque-Monsieur-400x400.jpg",
    "https://i.ibb.co.com/dt29F7s/Classic-tiramisu-cakae-400x400.jpg",
    "https://i.ibb.co.com/8Nvzr7p/Tripple-cheese-cake-400x400.jpg",
    "https://i.ibb.co.com/7RT6h29/Red-velvate-cake-400x400.jpg",
    "https://i.ibb.co.com/Mfqj4nF/61-400x400.jpg",
    "https://i.ibb.co.com/Scg8bdx/Chocolate-Indulgence-Mega-400x400.jpg",
    "https://i.ibb.co.com/Q9cSWHF/Chocolate-Brulee-400x400.jpg",
    "https://i.ibb.co.com/QrPt9gt/Chocolate-Cake-400x400.jpg",
    "https://i.ibb.co.com/jZ0fdkM/Salted-Caramel-Cake-400x400-1.webp",
    "https://i.ibb.co.com/K7TG4Yr/White-Chocolate-Macademia-400x400.jpg",
    "https://i.ibb.co.com/3R9FNW5/Orange-cheese-cake-400x400.jpg"
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-base-200 text-white  flex flex-col items-center justify-center">
      {/* Page Title */}
      <div className="absolute  flex items-center justify-center bg-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-white opacity-20">Gallery Page</h1>
      </div>

      {/* Gallery Section */}
      <div className="relative mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
