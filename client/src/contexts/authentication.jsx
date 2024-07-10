import React, { useState, useEffect, useContext} from "react";


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    const [email, setEmail] = useState(null)
    const [isLogin, setIsLogin] = useState(false)

    const value = {
        email,
        setEmail,
        isLogin,
        setIsLogin
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}