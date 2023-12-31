// src/context/auth.context.js

 
import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";
 
const AuthContext = React.createContext();
 
function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    
   
    const storeToken = (token) => {
      // ... no changes    
    }  
    
    const authenticateUser = () => { 
      // ... no changes      
    }
    
    const removeToken = () => {                    // <== ADD
      // Upon logout, remove the token from the localStorage
      localStorage.removeItem("authToken");
    }
   
   
    const logOutUser = () => {                   // <== ADD    
      // To log out the user, remove the token
      removeToken();
      // and update the state variables    
      authenticateUser();
    }  
   
   
    useEffect(() => {
      authenticateUser();
    }, []);
   
    
    return (                                                   
      <AuthContext.Provider
        value={{ 
          isLoggedIn,
          isLoading,
          user,
          storeToken,
          authenticateUser,
          logOutUser           
        }}      
      >
        {props.children}
      </AuthContext.Provider>
    )
    
  }
   
  export { AuthProviderWrapper, AuthContext };