

import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'


import { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import axios from 'axios'


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
            if (currentUser?.email) {
                setUser(currentUser)
                // generate token
                const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: currentUser?.email}, { withCredentials:true})
                // console.log(data)
                setLoading(false)
           
              }
              else{
                setUser(currentUser)
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials:true})
                // console.log(data)
                setLoading(false)
              }
               
        });
        return () => {
            unsubscribe()
        }
    }, [])





    // theme setup
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light" // Persist user preference
    );

    // Apply theme to the root HTML tag
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // Persist theme in localStorage
    }, [theme]);

    // Toggle between dark and light themes
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    // theme setup

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
        toggleTheme
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
