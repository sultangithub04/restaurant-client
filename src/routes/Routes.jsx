import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AddFood from '../pages/AddFood'
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
    
    
  

    
    
    ],
  },
])

export default router
