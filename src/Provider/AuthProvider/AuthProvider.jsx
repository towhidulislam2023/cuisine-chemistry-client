/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthProviderContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [loading,setLoading]=useState(true)
    const [user,setuser] = useState(null)
    const name="Towhid"
    const CreateNewUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(name,photoUrl)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
        })
    }
    const loginUser=(email ,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logOut=()=>{
        return signOut(auth)
    }
    const handelGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const handelGithubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe
        }
    }, [])
    const authInfo = {
        user,
        CreateNewUserWithEmailAndPassword,
        updateUserProfile,
        loginUser,
        logOut,
        handelGoogleLogin,
        handelGithubLogin,
        loading
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;