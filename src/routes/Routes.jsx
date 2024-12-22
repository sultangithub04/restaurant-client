import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "auth/login",
                element: <Login></Login>,
            },
            {
                path: "auth/register",
                element: <Register></Register>,
            },
        ]
    },
]);
export default router