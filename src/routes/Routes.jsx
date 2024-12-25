import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AddFood from '../pages/AddFood'
import AllFood from '../pages/AllFood'
import FoodDetails from '../pages/SingleFood'
import FoodPurchase from '../pages/FoodPurchase'
import SingleFood from '../pages/SingleFood'
import Gallery from '../pages/Gallery'
import MyFood from '../pages/MyFood'
import MyOrder from '../pages/MyOrder'
import UpdateFood from '../pages/UpdateFood'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
   
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/addfood',
        element: <AddFood></AddFood>,
      },
      {
        path: '/allfood',
        element: <AllFood></AllFood>,
      },
      {
        path: '/food/:id',
        element: <SingleFood></SingleFood>,
      },
      {
        path: '/purchase',
        element: <FoodPurchase></FoodPurchase>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/myFood',
        element: <MyFood></MyFood>,
      },
      {
        path: '/myOrder',
        element: <MyOrder></MyOrder>,
      },
      {
        path: '/update/:id',
        element: <UpdateFood></UpdateFood>,
      },
    
    
  

    
    
    ],
  },
])

export default router
