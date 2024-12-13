import React, { useContext, useState } from 'react'
import image from "../../assets/QuizLogo.png"
import Modal from './Modal';
import Login from '../Auth/Login';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import AppContext from '../../context/AuthContext';
const NavBar = () => {
    const context = useContext(AppContext);
  return (
    <div>
     <div className="flex items-center justify-between ">
      <h1 className="text-2xl font-medium w-[100px]">
      <img src={image} alt="Quiz App" />
      </h1>
      <div className='flex gap-3'>
      <NavLink className={({isActive})=>clsx({'bg-[#d92732] text-white   ': isActive},"text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",{"text-[#d92732]":!isActive})  } to="/" end>Home</NavLink>
      <NavLink className={({isActive})=>clsx({'bg-[#d92732] text-white   ': isActive},"text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",{"text-[#d92732]":!isActive})  } to="/m">Math Quiz</NavLink>
      <NavLink className={({isActive})=>clsx({'bg-[#d92732] text-white   ': isActive},"text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",{"text-[#d92732]":!isActive})  } to="/e">English Quiz</NavLink>
      <NavLink className={({isActive})=>clsx({'bg-[#d92732] text-white   ': isActive},"text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",{"text-[#d92732]":!isActive})  } to="/h">Html Quiz</NavLink>

      </div>
      <button onClick={()=>context.setIsOpen(true)} className="bg-[#d92732] text-white px-5 py-2 rounded-sm text-lg font-medium">
        Log In
      </button>
      <div>
      <Modal><Login/></Modal>

      </div>
    </div>
    </div>
  )
}

export default NavBar
