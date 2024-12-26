
import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const AddFood = () => {
const navigate= useNavigate()
 const { user } = useContext(AuthContext);
//  console.log(user.displayName, user.email);
 const name=user?.displayName;
 const email=user?.email;

  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    foodCategory: "",
    quantity: "",
    price: "",
    foodOrigin: "",
    description: "",
    email:"",
    purchaseCount:0,
  });
// console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, email });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.table({ ...formData, addedBy: { name, email } });
    toast.success("Food item added successfully!");
    try {
        // 1. make a post request
        await axios.post(`${import.meta.env.VITE_API_URL}/addfood`, formData)
        // 2. Reset form
        // form.reset()
        // 3. Show toast and navigate
        toast.success('Data Added Successfully!!!')
        navigate('/')
      } catch (err) {
        // console.log(err)
        toast.error(err.message)
      }


    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Food Item</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Food Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter food name"
              required
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Image (URL)
            </label>
            <input
              type="text"
              name="foodImage"
              value={formData.foodImage}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Food Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Category
            </label>
            <input
              type="text"
              name="foodCategory"
              value={formData.foodCategory}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g., Appetizer, Main Course, Dessert"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quantity"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Food Origin */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Origin (Country)
            </label>
            <input
              type="text"
              name="foodOrigin"
              value={formData.foodOrigin}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter country of origin"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a short description (ingredients, making procedure, etc.)"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Added By */}
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-sm text-gray-700">
              <strong>Added By:</strong> {name} ({email})
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-900 transition duration-200"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
