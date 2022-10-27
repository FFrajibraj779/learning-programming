
import { createBrowserRouter } from "react-router-dom";
import ContentLayout from "../Layout/ContentLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Category from "../Pages/Category/Category";
import Content from "../Pages/Content/Content";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PreInfo from "../Pages/PreInfo/PreInfo";
import Premium from "../Pages/Premium/Premium";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Tutorial from "../Pages/Tutorial/Tutorial";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/tutorial/:id',
                loader: ({ params }) => {
                    return fetch(`https://assignment-10-server-opal.vercel.app/tutorial/${params.id}`)
                },
                element: <ContentLayout></ContentLayout>
            },
            {
                path: '/tutorial',
                loader: () => {
                    return fetch('https://assignment-10-server-opal.vercel.app/tutorial')
                },
                element: <ContentLayout></ContentLayout>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => {
                    return fetch(`https://assignment-10-server-opal.vercel.app/category/${params.id}`)
                }
            },
            {
                path: '/premium/:id',
                loader: ({ params }) => {
                    return fetch(`https://assignment-10-server-opal.vercel.app/category/${params.id}`)
                },
                element: <PrivateRoute><Premium></Premium></PrivateRoute>
            },
            {
                path: '/tutorial',
                loader: () => {
                    return fetch('https://assignment-10-server-opal.vercel.app/tutorial')
                },
                element: <PreInfo></PreInfo>
            },
            {
                path: '/tutorial/:id',
                loader: ({ params }) => {
                    return fetch(`https://assignment-10-server-opal.vercel.app/tutorial/${params.id}`)
                },
                element: <PreInfo></PreInfo>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }


        ]
    }
])

export default router;