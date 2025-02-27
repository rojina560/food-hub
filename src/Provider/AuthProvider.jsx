import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
     const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
     }
     const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
     }
     const updateUserProfile = (name,photo)=>{
       return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
     }
    useEffect(()=>{ 
        const unSubscribe =   onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            console.log( 'current user',currentUser);
            setUser(currentUser)
        })
       return ()=>{
       return unSubscribe()}

    },[])
    const authInfo = {
        createUser,user,loading,login,logOut,updateUserProfile , setUser,googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;