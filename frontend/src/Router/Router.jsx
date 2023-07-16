import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home";
import Cart from "../Components/Cart";
import Error from "../Components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
        ]
    },
]);
export default router;