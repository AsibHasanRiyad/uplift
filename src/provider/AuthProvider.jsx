/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../components/firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);


    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    //login user
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout user
    const logOut = () =>{
        return signOut(auth)
    }

    //onAuth State change
   useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser, 'Hello auth');
        setUser(currentUser)
    });
    return () =>{
        unSubscribe()
    }
   },[auth, user])


    const authInfo ={
        createUser,
        loginUser,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;