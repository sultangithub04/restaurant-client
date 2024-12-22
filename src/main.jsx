import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD

import {

  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
=======
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> a1cfd9d87526f6ea3f3689ede68e05d4f9d7b6c1
  </StrictMode>,
)
