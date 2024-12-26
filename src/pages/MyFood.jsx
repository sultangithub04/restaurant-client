
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import toast from 'react-hot-toast'
import { AuthContext } from '../providers/AuthProvider'
import axios from 'axios'
import FoodCard from '../components/FoodCard'
import MyFoodCards from '../components/MyFoodCards'

const MyFood = () => {

    const { user } = useContext(AuthContext)
    // console.log(user?.email);
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetchAllFoods()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    const fetchAllFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myFood/${user?.email}`)
        setFoods(data)
    }

    return (


        <div>
        <div>
            <h1 className='text-center text-5xl font-extrabold mt-20 text-red-700'>MY ADDED FOOD</h1>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                {foods.map(food => (
                    <MyFoodCards key={food._id} food={food} />
                ))}
            </div>
       
        </div>
            
        </div>
    );
};

export default MyFood;

