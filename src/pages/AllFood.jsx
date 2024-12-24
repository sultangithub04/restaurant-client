/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import FoodCard from '../components/FoodCard'

const AllFood = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    const [itemPerPage, setItemPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(0)
    const [count, setCount]= useState(0);

    useEffect(()=>{
        fetch('http://localhost:5000/foodCount')
        .then(res=>res.json())
        .then(data=>setCount(data.count))
    }, [])

    const numberOfPage = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPage).keys()]
  

    const handlePrevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1)
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1)
    }

    const handleItemChange = (e) => {
        const val = e.target.value
        setItemPerPage(parseInt(val));
        setCurrentPage(0)
    }
    useEffect(() => {
        const fetchAllFoods = async () => {
            const { data } = await axios.get(`http://localhost:5000/foods?search=${search}&page=${currentPage}&size=${itemPerPage}`)
            setFoods(data)
 
        }
        fetchAllFoods()
    }, [currentPage, itemPerPage, search])

    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>

                    <div>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                onChange={e => setSearch(e.target.value)}
                                placeholder='Enter Food Title'
                                aria-label='Enter Food Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </div>
                 
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {foods.map(food => (
                        <FoodCard key={food._id} food={food} />
                    ))}
                </div>
            </div>
            {/* pagination */}
            <div className='text-center my-6'>
                <h2>Current pages: {currentPage}</h2>
                <button onClick={handlePrevPage}>prev</button>
                {
                    pages.map(page => <NavLink onClick={() => setCurrentPage(page)} className={currentPage === page ? 'bg-red-300 btn mx-4' : 'btn mx-4'} key={page}>{page}</NavLink>)
                }
                <button onClick={handleNextPage}>Next</button>
 
    )
}

export default AllFood
