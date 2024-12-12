import React, { createContext, useState, useContext, useEffect } from "react";

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
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [adminQuestionCollection, setAdminQuestionCollection] = useState(
    getLocalStorage("AdminQuestionCollectin")
  );
  const [addInput, setaddInput] = useState([""]);
  useEffect(() => {
    setLocalStorage("AdminQuestionCollectin", adminQuestionCollection);
  }, [adminQuestionCollection]);
  useEffect(() => {
    setLocalStorage("login", userData);
  }, [userData]);
  console.log(adminQuestionCollection);
  console.log(correctAnswer);
  console.log(userData);
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
    setaddInput
  };

  return <AppContext.Provider value={passData}>{children}</AppContext.Provider>;
};

export default AppContext;
