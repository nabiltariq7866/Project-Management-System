import React, { useContext, useState } from "react";
import AppContext from "../../context/AuthContext";
const Login = () => {
  const context=useContext(AppContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  function handleLoginData(name, value) {
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function hanldeSubmit(e) {
    e.preventDefault();
    context.setLocalStorage("login",loginData)
    context.setUser(loginData)
    setLoginData({
      email: "",
      password: "",
    });
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2  border-emerald-600  p-20 rounded-lg ">
        <form
          onSubmit={hanldeSubmit}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <input
            className="placeholder:text-gray-400 text-xl outline-none border-2 bg-transparent border-emerald-600 rounded-full py-3 px-5"
            type="email"
            placeholder="Enter your Email"
            required
            value={loginData.email}
            onChange={(e) => handleLoginData("email", e.target.value)}
          />
          <input
            className="placeholder:text-gray-400 text-xl outline-none border-2 bg-transparent border-emerald-600 rounded-full py-3 px-5"
            type="password"
            placeholder="Enter your Password"
            required
            value={loginData.password}
            onChange={(e) => handleLoginData("password", e.target.value)}
          />
          <button className="placeholder:text-white text-xl outline-none  bg-emerald-600 rounded-full py-3 px-5 w-[180px]">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
