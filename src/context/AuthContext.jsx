
import React, { createContext, useState, useContext } from "react";

// Create a context for the app
const AppContext = createContext({
    loginData:{},
    setUser:()=>{ },
    setLocalStorage:()=>{ },
    getLocalStorage:()=>{ },
});

// Create a provider component
export const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(null); // Initial data can be null or empty, based on your requirement

  // A function to update the user data
  const setUser = (data) => {
    setUserData(data);
  };
  // A function to set data on local storage
  function setLocalStorage(name,item){
      localStorage.setItem(name,JSON.stringify(item));
    }
    // A function to get data on local storage
  function getLocalStorage(name){
    const localTodos = localStorage.getItem(name);
    return JSON.parse(localTodos) || [];
  }

  return (
    <AppContext.Provider value={{ userData, setUser,setLocalStorage,getLocalStorage }}>
      {children}
    </AppContext.Provider>
  );
};

export default  AppContext;