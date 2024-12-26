import React, { useContext, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { AuthContext } from "../providers/AuthProvider";
import bannerImg from '../assets/banner.jpg';
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const FoodPurchase = () => {
  const { state } = useLocation();
  const { user } = useContext(AuthContext);
  const navagate = useNavigate()
  const availableQuantity = parseInt(state.quantity);
  const basePrice = state.price;

  const [formData, setFormData] = useState({
    foodName: state.foodName,
    foodId: state._id,
    price: basePrice,
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      // Recalculate the price 
      if (name === "quantity") {
        const quantity = Math.max(1, Math.min(value, availableQuantity));
        updatedData.price = basePrice * quantity;
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      foodName: formData.foodName,
      price: formData.price,
      quantity: formData.quantity,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      buyingDate: new Date(),
      foodId: formData.foodId,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/purchase`, data);
      if (response.status === 200) {
        toast.success("Purchase successful!");

        setFormData({ foodName: state.foodName, price: basePrice, quantity: 1 });
        navagate("/myOrder")
   
      }
    } catch (error) {
      console.error("Error submitting purchase:", error);
      toast.error("Failed to make a purchase.");
    }
  };

  return (
    <div>
      <div>
        <div
          className="hero"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Food Purchase</h1>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="flex justify-center items-center bg-gray-100">
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
              readOnly
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
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
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
              value={formData.quantity > 0 & formData.quantity <= availableQuantity ? formData.quantity : "1"}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 "
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 "
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


