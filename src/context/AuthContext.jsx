import React, { createContext, useState, useContext, useEffect } from "react";
import { IoContractOutline } from "react-icons/io5";

const AppContext = createContext({
  userData: [],
  setUserData: () => {},
  correctAnswer: "",
  setLocalStorage: () => {},
  getLocalStorage: () => {},
  setCorrectAnswer: () => {},
  setAdminQuestionCollection: () => {},
  adminQuestionCollection: [],
  setaddInput: () => {},
  addInput: [],
  editAddInput: [],
  isOpen:false,
  setIsOpen:()=>{},
  setEditAddInput:()=>{},
});
function setLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

function getLocalStorage(name) {
  const localTodos = localStorage.getItem(name);
  return JSON.parse(localTodos) || [];
}

export const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(getLocalStorage("login"));
  const [isOpen, setIsOpen] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  console.log(userData);
  const [adminQuestionCollection, setAdminQuestionCollection] = useState(
    getLocalStorage("AdminQuestionCollectin")
  );
  const [addInput, setaddInput] = useState([""]);
  const [editAddInput, setEditAddInput] = useState([""]);
  useEffect(() => {
    setLocalStorage("AdminQuestionCollectin", adminQuestionCollection);
  }, [adminQuestionCollection]);
  useEffect(() => {
    setLocalStorage("login", userData);
  }, [userData]);

  const setUser = (data) => {
    setUserData(data);
  };

  const passData = {
    userData,
    setUserData,
    setLocalStorage,
    getLocalStorage,
    setCorrectAnswer,
    correctAnswer,
    setAdminQuestionCollection,
    adminQuestionCollection,
    addInput,
    setaddInput,
    isOpen,
    setIsOpen,
    editAddInput,
    setEditAddInput
  };

  return <AppContext.Provider value={passData}>{children}</AppContext.Provider>;
};

export default AppContext;
