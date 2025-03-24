import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

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
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
           
            console.log( 'current user',currentUser);
            setUser(currentUser)
            if(currentUser && currentUser.email){
                // get token and store client
                const userInfo = {email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token);
                        setLoading(false)
                        
                    }
                })
                .catch(err =>{
                    console.log('error getting token', token);
                })
                
            }
            else{
                // TODO: remove token (if token stored in the client side local storage, caching, in memory)
                
                localStorage.removeItem('access-token')
                localStorage.removeItem('user-info')
                setLoading(false)
            }
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