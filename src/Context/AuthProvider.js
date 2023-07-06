/* eslint-disable react/jsx-no-constructed-context-values */
'use client'

import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user by email and password
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // update user Profile
    const updateUser = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // login user

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    // reset password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        registerUser,
        updateUser,
        loading,
        loginUser,
        resetPassword,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProvider;