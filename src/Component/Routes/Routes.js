
import { createBrowserRouter } from "react-router-dom";
import ContentLayout from "../Layout/ContentLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Content from "../Pages/Content/Content";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
            path:'/',
            element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/content',
                element:<ContentLayout></ContentLayout>
            },
             

        ]
    }
])

export default router ;