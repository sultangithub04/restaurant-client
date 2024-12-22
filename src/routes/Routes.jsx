import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        Children: [
            {
                path: "/",
                element: <div>Hello world!</div>,
            }
        ]
    },
]);

export default router;