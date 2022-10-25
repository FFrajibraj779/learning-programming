import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../Firebase/Firebase.config';



const auth =getAuth(app);

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
const[userInfo, setUserInfo] = useState({
    email:"",
    password:""
});



const  createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const emailSignIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
const googleSignIn = () =>{
      return signInWithPopup(auth, googleProvider)
}
const authInfo = {userInfo,googleSignIn, createUser, setUserInfo, emailSignIn}

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;