/* eslint-disable react/prop-types */
import axios from "axios";
import moment from "moment";
import toast from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'
// import { format } from 'date-fns'
const MyOrderCards = ({ food}) => {
    const { _id, foodName, foodImage, quantity, price, buyingDate } =
        food || {}
const navigate= useNavigate()
        const formattedDate = moment(buyingDate).format("MMMM Do YYYY, h:mm:ss A");

console.log(food);
const handleDelete=async(id)=>{
    try {
        await axios.delete(`http://localhost:5000/delete/${id}`);
        toast.success("Data delete successfully!");
        navigate("/allFood");
    } catch (err) {
        console.error(err);
        toast.error("Failed to update food data");
    }
}
    return (

        <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
            <img src={foodImage} alt="" />
            <div className='text-left ml-2 space-y-2'>
                <h6 className='product-name'><span className='font-extrabold'>Food Name : </span> {foodName}</h6>
                <p> <span className='font-extrabold'>Price : </span> ${price}</p>
                {/* <p><span className='font-extrabold'>Food Category :</span> {foodCategory}</p> */}
                <p><span className='font-extrabold'>Quantity :</span> {quantity}</p>
                <p><span className='font-extrabold'>Buying Date :</span> {formattedDate}</p>
            </div>
            <button onClick={()=>handleDelete(_id)}  className='btn bg-red-700 hover:bg-gray-950 text-white mt-3'>
            Delete 

            </button>
        </div>
    )
}

export default MyOrderCards
