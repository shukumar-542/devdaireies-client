/* eslint-disable react/jsx-no-constructed-context-values */
'use client'

import { createUserWithEmailAndPassword, 
    getAuth, onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);


function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUserWithEMail = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signUserWithEmailPass = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
        
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUSer=>{
            setUser(currentUSer)
            setLoading(false)
            setReload(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[reload])
// console.log(loading);
    const authInfo ={
        user,
        loading,
        setUser,
        signInWithGoogle,
        createUserWithEMail,
        signUserWithEmailPass,
        logOut,
        setLoading
    }
    // console.log(authInfo);
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProvider;