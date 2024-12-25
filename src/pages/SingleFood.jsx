import axios from 'axios'
// import { compareAsc, format } from 'date-fns'
import { useContext, useEffect, useState } from 'react'

// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { toast } from 'react-hot-toast'
import { AuthContext } from '../providers/AuthProvider'

const SingleFood = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    // const [startDate, setStartDate] = useState(new Date())
    const { id } = useParams()
    const [food, setFood] = useState({})
    useEffect(() => {
        fetchJobData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const fetchJobData = async () => {
        const { data } = await axios.get(`http://localhost:5000/food/${id}`
        )
        setFood(data)
        // setStartDate(new Date(data.deadline))
    }
    const { _id, foodName, foodImage, foodCategory, quantity, price, foodOrigin, description, purchaseCount } =
        food || {}


    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
     
            <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>


                <div>
                    <h1 className='my-2 text-3xl font-semibold text-gray-800 '>
                        {foodName}
                    </h1>
               

                    <div className='flex justify-center'>
                        <img  src={foodImage} alt="" />
                    </div>

                </div>
            </div>

            <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-4xl font-semibold text-gray-700 capitalize '>
                    Food Details
                </h2>
                <br /><br />
                <div className='text-left ml-2 space-y-6'>
                    <h6 className='product-name'><span className='font-extrabold'>Food Name : </span> {foodName}</h6>
                    <p> <span className='font-extrabold'>Price : </span> ${price}</p>
                    <p><span className='font-extrabold'>Food Category :</span> {foodCategory}</p>
                    <p><span className='font-extrabold'>Quantity :</span> {quantity}</p>
                    <p><span className='font-extrabold'>Food Origin :</span> {foodOrigin}</p>
                    <p><span className='font-extrabold'>Description :</span> {description}</p>
                    <p><span className='font-extrabold'>Purchase Count :</span> {purchaseCount}</p>
                </div>

                <Link state={food} to ={`/purchase`} className='btn btn-primary mt-10'>Purchase</Link>
            
            </section>
            
        </div>
    )
}

export default SingleFood;
