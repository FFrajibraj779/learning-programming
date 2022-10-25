
import { createBrowserRouter } from "react-router-dom";
import ContentLayout from "../Layout/ContentLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Category from "../Pages/Category/Category";
import Content from "../Pages/Content/Content";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import LeftsideContainer from "../Pages/LeftsideContainer/LeftsideContainer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Tutorial from "../Pages/Tutorial/Tutorial";
import RightsideContainer from "../RightsideContainer/RightsideContainer";



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
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params})=>{
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
            } ,
            {
                path:'/tutorial/:id',
                loader:({params})=>{
                    return fetch(`http://localhost:5000/tutorial/${params.id}`)
                },
                element:<Tutorial></Tutorial>
            }     
        ]
    }
])

export default router ;