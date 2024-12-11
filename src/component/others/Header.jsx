import React, { useContext } from "react";
import AppContext from "../../context/AuthContext";
import image from "../../assets/QuizLogo.png"
const Header = () => {
const context = useContext(AppContext)
const userData=context.getLocalStorage("login")
let userName=userData.email.split('@')[0]
userName=userName.charAt(0).toUpperCase()+userName.slice(1).toLowerCase();
  function handleLogout(){
    console.log('logout')
    context.setUser({login:false})
    context.setLocalStorage("login",{login:false})
  }
  return (
    <div className="flex items-center justify-between ">
      <div className="flex gap-2">
       <h1 className="text-2xl font-medium w-[100px]">
      <img src={image} alt="Quiz App" />
      </h1>
      <h1 className="text-2xl font-medium mt-3">
        Hi, <br /> <span className="text-4xl font-semibold">{userName}</span>
      </h1>

      </div>
      <button onClick={handleLogout} className="bg-[#d92732] text-white px-5 py-2 rounded-sm text-lg font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;
