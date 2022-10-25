import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../Firebase/Firebase.config';



const auth =getAuth(app);

export const AuthContext = createContext();

const UserContext = ({children}) => {
const[userInfo, setUserInfo] = useState({
    email:"",
    password:""
});


const  createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const authInfo = {userInfo, createUser, setUserInfo}

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;