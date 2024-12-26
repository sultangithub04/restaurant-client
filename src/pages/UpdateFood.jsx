import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateFood = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        foodName: "",
        foodImage: "",
        foodCategory: "",
        quantity: "",
        price: "",
        foodOrigin: "",
        description: "",
    });

    useEffect(() => {
        fetchFoodData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const fetchFoodData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`);
            // Set formData with the fetched data
            setFormData({
                foodName: data.foodName || "",
                foodImage: data.foodImage || "",
                foodCategory: data.foodCategory || "",
                quantity: data.quantity || "",
                price: data.price || "",
                foodOrigin: data.foodOrigin || "",
                description: data.description || "",
            });
        } catch (err) {
            console.error(err);
            toast.error("Failed to fetch food data");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/update-food/${id}`, formData);
            toast.success("Data updated successfully!");
            navigate("/myFood");
        } catch (err) {
            console.error(err);
            toast.error("Failed to update food data");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Food Item</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <div className="bg-gray-100 p-4 rounded-md">
                        <p className="text-sm text-gray-700">
                            <strong>Updated By:</strong> {user?.displayName} ({user?.email})
                        </p>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-900 transition duration-200"
                        >
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;
