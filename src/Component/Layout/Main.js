import React, { createContext } from 'react';
import Header from '../Pages/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';



const Main = () => {


    return (

        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    )
}

export default Main;