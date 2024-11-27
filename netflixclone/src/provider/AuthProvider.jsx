import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvier = ({children}) =>{
    const [user, setUser] = useState(null);

    const login = (userData)=>{
        setUser(userData);
        return true;
    }

    const logout = ()=>{
        setUser(null)
    }

    const isAuth = ()=>{
        return user!==null ?true:false
    }

    return (
        <AuthContext.Provider value={{user,login,logout,isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>{
    return useContext(AuthContext)
}