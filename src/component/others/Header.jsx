import React, { useContext } from "react";
import AppContext from "../../context/AuthContext";
import image from "../../assets/QuizLogo.png";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
const Header = () => {
  const context = useContext(AppContext);
  const userData = context.getLocalStorage("login");
  let userName = userData.email.split("@")[0];
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  function handleLogout() {
    context.setUserData({ login: false });
    context.setLocalStorage("login", { login: false });
  }
  console.log(context.userData);
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
      <div className="flex gap-3">
        {context.userData.role === "admin" ? (
          <>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#d92732] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",
                  { "text-[#d92732]": !isActive }
                )
              }
              to="AllQuestionAdmin"
              end
            >
              All Question
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#d92732] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",
                  { "text-[#d92732]": !isActive }
                )
              }
              to="CreateQuestion"
            >
              Add Question
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#d92732] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",
                  { "text-[#d92732]": !isActive }
                )
              }
              to="AllQuizDetails"
            >
              All Result
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#d92732] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",
                  { "text-[#d92732]": !isActive }
                )
              }
              to="AllQuestionAdmin"
            >
              Take Quiz
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#d92732] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",
                  { "text-[#d92732]": !isActive }
                )
              }
              to="FinalResult"
            >
              Final Result
            </NavLink>
          </>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#d92732] text-white px-5 py-2 rounded-sm text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
