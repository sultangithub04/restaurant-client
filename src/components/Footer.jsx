import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-red-600">ABC Restaurant Recipe®</h2>
          <p className="mt-2">Best Restaurant & Café in Bangladesh</p>
          <a href="#" className="text-red-500 mt-2 inline-block">
            Read More
          </a>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold">Opening Hours</h3>
          <p className="mt-2">Everyday 8am – 12am</p>
          <p className="mt-1">
            Hotline:{" "}
            <a href="tel:09600000" className="text-red-500">
              0961000000
            </a>
          </p>
          <h3 className="text-lg font-bold mt-4">Follow Us</h3>
      
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-white hover:text-red-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaEnvelope />
            </a>
          </div>
          <br />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 bg-gray-800 text-white rounded-md"
            />
            <button className="absolute top-0 right-0 h-full px-4 bg-red-600 text-white rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-red-700 text-white py-4 text-center">
        <p className="text-sm">
          Copyright © 2024 by ABC Restaurant, Fair Group. All Rights Reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-200">
            About
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-200">
            Online Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-200">
            FAQ
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-200">
            Career
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
