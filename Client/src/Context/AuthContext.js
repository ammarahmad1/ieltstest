import React, { Children } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../config/firebase-config";



const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    return(
        <UserContext.Provider value={createUser}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return UserContext(UserContext)
}