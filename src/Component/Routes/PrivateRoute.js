import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const{userInfo, loader} = useContext(AuthContext);
    const location = useLocation();
    console.log(userInfo);

    if(loader){
        return <div>loading....</div>;
    }
 if(!userInfo?.email){
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
 }

    return children;
};

export default PrivateRoute;