import React from 'react';

const AddFood = () => {
    return (
        <div>
            <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Add New Food Item</h2>
                <form action="#" method="POST" enctype="multipart/form-data" class="space-y-6">

                    <!-- Food Name -->
                    <div>
                        <label for="food-name" class="block text-sm font-medium text-gray-700">Food Name</label>
                        <input
                            type="text"
                            id="food-name"
                            name="food_name"
                            placeholder="Enter the name of the food item"
                            required
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <!-- Food Image -->
                    <div>
                        <label for="food-image" class="block text-sm font-medium text-gray-700">Food Image</label>
                        <input
                            type="file"
                            id="food-image"
                            name="food_image"
                            accept="image/*"
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <!-- Food Category -->
                    <div>
                        <label for="food-category" class="block text-sm font-medium text-gray-700">Food Category</label>
                        <select
                            id="food-category"
                            name="food_category"
                            required
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="" disabled selected>Select a category</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snacks">Snacks</option>
                            <option value="desserts">Desserts</option>
                        </select>
                    </div>

                    <!-- Quantity -->
                    <div>
                        <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            placeholder="Enter available quantity"
                            required
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <!-- Price -->
                    <div>
                        <label for="price" class="block text-sm font-medium text-gray-700">Price (USD)</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min="0.01"
                            step="0.01"
                            placeholder="Enter price in USD"
                            required
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <!-- Added By (Name and Email - Auto-filled, Read-Only) -->
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label for="added-by-name" class="block text-sm font-medium text-gray-700">Added By (Name)</label>
                            <input
                                type="text"
                                id="added-by-name"
                                name="added_by_name"
                                value="John Doe" <!-- Replace with logged-in user's name -->
                            readonly
                            class="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm sm:text-sm"
        />
                        </div>
                        <div>
                            <label for="added-by-email" class="block text-sm font-medium text-gray-700">Added By (Email)</label>
                            <input
                                type="email"
                                id="added-by-email"
                                name="added_by_email"
                                value="johndoe@example.com" <!-- Replace with logged-in user's email -->
                            readonly
                            class="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm sm:text-sm"
        />
                        </div>
                    </div>

                    <!-- Food Origin -->
                    <div>
                        <label for="food-origin" class="block text-sm font-medium text-gray-700">Food Origin</label>
                        <input
                            type="text"
                            id="food-origin"
                            name="food_origin"
                            placeholder="Enter the country of origin"
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <!-- Short Description -->
                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700">Short Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter a short description (ingredients, preparation details, etc.)"
                            rows="4"
                            required
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        ></textarea>
                    </div>

                    <!-- Add Item Button -->
                    <div>
                        <button
                            type="submit"
                            class="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Add Food Item
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddFood;