import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';



const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const[loader, setLoader] = useState(true);
 
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider )
    }
    const handleSignOut = () => {
        setLoader(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);
            setLoader(false)
        })
        return () => {
            unSubScribe();
        }
    }, [])
    const authInfo = { userInfo, googleSignIn, handleSignOut, createUser, setUserInfo, emailSignIn, loader }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;