import React, { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContex = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [toys, setToys] = useState([]);
    const [loading,setLoading]=useState(true)
    // const [error,setError] = useState('');
    const [user,setUser]=useState(null);
// chefs data fetch
    useEffect(() => {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
        .catch(error => {
            console.log("Error fetching toys: ", error);
        });
    }, []);
    // create user using firebase
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    // signin mathod
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(()=>{
        const unSubscrib = onAuthStateChanged(auth,currentUser=>{
            // console.log(currentUser)
            setLoading(false)
            setUser(currentUser)
           
        })
        return ()=>{
          return unSubscrib()
        }
    },[])
// logout mathod 
    const logOut =()=>{
        signOut(auth)
    }
// signin with google
    const googleSignIn=()=>{
        signInWithPopup(auth, provider)
    }


    
  

    const authinfo ={toys,createUser,signIn,logOut,loading,user,googleSignIn}
    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;