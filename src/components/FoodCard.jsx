/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
// import { format } from 'date-fns'
const FoodCard = ({ food }) => {
    const { _id, foodName, foodImage, foodCategory, quantity, price } =
        food || {}

    return (

        <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
            <img src={foodImage} alt="" />
            <div className='text-left ml-2 space-y-2'>
                <h6 className='product-name'><span className='font-extrabold'>Food Name : </span> {foodName}</h6>
                <p> <span className='font-extrabold'>Price : </span> ${price}</p>
                <p><span className='font-extrabold'>Food Category :</span> {foodCategory}</p>
                <p><span className='font-extrabold'>Quantity :</span> {quantity}</p>
            </div>
            <Link to={`/food/${_id}`} className='btn btn-primary mt-3'>
                Details

            </Link>
        </div>
    )
}

export default FoodCard
