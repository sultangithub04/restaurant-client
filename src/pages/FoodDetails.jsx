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
    const { _id, foodName, foodImage, foodCategory, quantity, price, foodOrigin, description } =
        food || {}

    // Handle form submit
    const handleSubmit = async e => {
        // e.preventDefault()
        // const form = e.target
        // const price = form.price.value
        // const email = user?.email
        // const comment = form.comment.value
        // const jobId = _id

        // 0. Check bid permissions validation
        // if (user?.email === buyer?.email)
        //     return toast.error('Action not permitted!')

        // 1. Deadline crossed validation
        // if (compareAsc(new Date(), new Date(deadline)) === 1)
        //     return toast.error('Deadline Crossed, Bidding Forbidden!')

        // 2. Price within maximum price range validation
        // if (price > max_price)
        //     return toast.error('Offer less or at least equal to maximum price!')

        // 3. offered deadline is within sellers deadline validation
        // if (compareAsc(new Date(startDate), new Date(deadline)) === 1)
        //     return toast.error('Offer a date within deadline')

        // const bidData = {
        //     price,
        //     email,
        //     comment,
        //     deadline: startDate,
        //     jobId,
        //     title,
        //     category,
        //     status: 'Pending',
        //     buyer: buyer?.email,
        // }

        // try {
        //     // 1. make a post request
        //     const { data } = await axios.post(
        //         `${import.meta.env.VITE_API_URL}/add-bid`,
        //         bidData
        //     )
        //     // 2. Reset form
        //     form.reset()
        //     // 3. Show toast and navigate
        //     toast.success('Bid Successful!!!')
        //     console.log(data)
        //     navigate('/my-bids')
        // } catch (err) {
        //     console.log(err)
        //     toast.error(err?.response?.data)
        // }
    }
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
                    <p><span className='font-extrabold'>Purchase Count :</span> 0</p>
                </div>

                <Link to ={`/purchase`} className='btn btn-primary mt-10'>Purchase</Link>
            
            </section>
            
        </div>
    )
}

export default SingleFood;
