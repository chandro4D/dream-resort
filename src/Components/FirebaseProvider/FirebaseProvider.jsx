import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)


    const createUser =(email,password,name,PhotoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('user in auth state change',currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const allValues ={
        createUser,
        user,
        logOut,
        signIn,
        loading

    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;