
import React, { createContext, useState, useContext, useEffect } from "react";


const AppContext = createContext({
  userData:{},
    setUser:()=>{ },
    setLocalStorage:()=>{ },
    getLocalStorage:()=>{ },
});
function setLocalStorage(name,item){
  localStorage.setItem(name,JSON.stringify(item));
}

function getLocalStorage(name){
const localTodos = localStorage.getItem(name);
return JSON.parse(localTodos) || [];
}

export const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(null); 
  console.log(userData)
  // useEffect(()=>{
  //   console.log("useEffect")
  //   setLocalStorage("login",userData);
  // },[userData])
  const setUser = (data) => {
    setUserData(data);
  };
  
 
 

  return (
    <AppContext.Provider value={{ userData, setUser,setLocalStorage,getLocalStorage }}>
      {children}
    </AppContext.Provider>
  );
};

export default  AppContext;