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
import PrivateRoute from './PrivateRoute'
import ContactUs from '../components/ContactUs'

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
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
      },
      {
        path: '/allfood',
        element: <AllFood></AllFood>,
      },
      {
        path: '/food/:id',
        element: <PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
      },
      {
        path: '/purchase',
        element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/myFood',
        element: <PrivateRoute><MyFood></MyFood></PrivateRoute>,
      },
      {
        path: '/myOrder',
        element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
      },
      {
        path: '/contactus',
        element:<ContactUs></ContactUs>
      },
    
    
  

    
    
    ],
  },
])

export default router
