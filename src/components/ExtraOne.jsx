import React from "react";
import { FaTag, FaShippingFast, FaUsers } from "react-icons/fa";

const ExtraOne = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <br />

      <h1 className="text-2xl font-bold text-center my-8 text-gray-950">FOOD TOP PICKS</h1>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
        {/* Best Price Guarantee */}
        <div className="flex flex-col items-center">
          <FaTag className="text-4xl text-red-700 mb-2" />
          <p className="font-semibold">BEST PRICE GUARANTEE</p>
          <span className="text-lime-900 font-bold text-sm">LIVE</span>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center">
          <FaShippingFast className="text-4xl text-red-700 mb-2" />
          <p className="font-semibold">FREE SHIPPING*</p>
        </div>

        {/* Massive Discounts */}
        <div className="flex flex-col items-center">
          <FaTag className="text-4xl text-red-700 mb-2" />
          <p className="font-semibold">MASSIVE DISCOUNTS</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#111827] text-white mt-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {/* Great Value */}
        <div>
          <p className="font-semibold text-lg">GREAT VALUE</p>
          <p className="text-sm">Our Customers Deserve Fair Prices.</p>
        </div>

        {/* Free Shipping */}
        <div>
          <p className="font-semibold text-lg">FREE SHIPPING</p>
          <p className="text-sm">On Orders Over $75. Exclusions Apply.</p>
        </div>

        {/* Join Our Community */}
        <div>
          <p className="font-semibold text-lg">JOIN OUR COMMUNITY</p>
          <p className="text-sm">Sign Up and Get Exclusive Privileges.</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraOne;
