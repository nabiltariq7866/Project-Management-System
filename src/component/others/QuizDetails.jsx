import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AuthContext";
import SelectedQuizdetail from "./SelectedQuizdetail";
import Modal from "./Modal";

const QuizDetails = ({ selectedQuiz
  ,setSelectedQuiz
 }) => {
  const context = useContext(AppContext);
  const [selectedQuizdetail, setselectedQuizdetail]= useState(null);
  console.log(context.isOpen);
  console.log(selectedQuizdetail);
  useEffect(() => {
    console.log("enter");

    setselectedQuizdetail(null)
  }, [selectedQuiz]);
  function handleSetReault(quizDetails) {
    console.log(quizDetails);
    setselectedQuizdetail(quizDetails);
    context.setIsOpen(true);
  }
  return (
    <div className="mt-4 bg-gray-500 p-4 rounded-md">
      <h2 className="text-xl font-bold bg-stone-600 p-4 rounded-md mb-3">
        Quiz Details for {selectedQuiz.email}
      </h2>
      <ul>
        {selectedQuiz.quizzes.map((quiz, index) => {
          return (
            <ul key={index}>
              <p className="my-2">
                <strong className="text-xl font-bold bg-stone-600 p-1 rounded-md">
                  Quiz Time:
                </strong>{" "}
                {quiz.quizTime}
              </p>
              <p className="text-gray-800">Score : {quiz.scoreCard}</p>
              <button
                type="button"
                className="bg-[#d92732] my-1 text-white px-3 py-2 rounded-md text-[12px] font-semibold"
                onClick={() => handleSetReault(quiz)}
              >
                See result
              </button>
              {selectedQuizdetail && (
                <Modal setSelectedQuiz={setSelectedQuiz} 
                setselectedQuizdetail={setselectedQuizdetail}
                >
                  <SelectedQuizdetail
                    selectedQuiz={selectedQuizdetail}
                  />
                </Modal>
              )}
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizDetails;
