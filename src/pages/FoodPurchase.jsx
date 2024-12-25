
// Import necessary modules
import React, { useContext, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { AuthContext } from "../providers/AuthProvider";
import bannerImg from '../assets/banner.jpg';
import toast from "react-hot-toast";
const FoodPurchase = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    foodName: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      buyerName: user?.name,
      buyerEmail: user?.email,
      buyingDate: Date.now(),
    };

    try {
      const response = await axios.post("http://localhost:5000/api/purchase", data);
      if (response.status === 200) {
        toast.success("Purchase successful!");
        setFormData({ foodName: "", price: "", quantity: "" });
      }
    } catch (error) {
      console.error("Error submitting purchase:", error);
      toast.error("Failed to make a purchase.");
    }
  };

  return (
    <div>
      <div>
        {/* test */}
        <div
          className="hero "
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}>
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <br /><br />
              <h1 className="mb-5 text-5xl font-bold">Food Purchase </h1>
              <br /><br />
            </div>
          </div>
        </div>
        {/* test */}
      </div>
      <div className="flex justify-center items-center h-screen bg-gray-100">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8"
        >
          <h2 className="text-xl font-bold mb-6 text-center">Food Purchase</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodName">
              Food Name
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Buyer Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Buyer Email
            </label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodPurchase;
