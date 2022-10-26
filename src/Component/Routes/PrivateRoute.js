import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { contentContext } from '../Layout/ContentLayout';

const PrivateRoute = ({children}) => {
    const{userInfo, loader} = useContext(contentContext);
    const location = useLocation();
    console.log(userInfo);

    if(loader){
        return <Spinner animation='border'/>
    }
 if(!userInfo){
    return <Navigate to='/login'></Navigate>
 }

    return children;
};

export default PrivateRoute;