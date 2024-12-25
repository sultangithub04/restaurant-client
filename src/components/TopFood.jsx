import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { Link } from 'react-router-dom';

const TopFood = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        const fetchAllFoods = async () => {
            const { data } = await axios.get(`http://localhost:5000/topFood`)
            setFoods(data)
        }
        fetchAllFoods()
    }, [])
    console.log(foods);
    return (
        <div>
            <h1 className='text-center text-5xl font-extrabold mt-20 text-red-700'>Top Selling Product</h1>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                {foods.map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
            <br />
            <br />
            <Link to={`/allfood`} className="btn w-56 bg-red-700 text-white hover:bg-gray-900 border-none">See All</Link>
            <br />
            <br />
        </div>
    );
};

export default TopFood;