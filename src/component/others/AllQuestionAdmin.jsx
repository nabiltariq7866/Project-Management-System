import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AuthContext";
import AllTask from "./AllTask";
import { useNavigate, replace } from "react-router-dom";
const AllQuestionAdmin = () => {
  const context = useContext(AppContext);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  // let quizDataUpdate=context.quizData;
  const navigate = useNavigate();
  useEffect(() => {
    if (context.userHistoryIndex !== -1) {
      const answeredQuestions =
        context.userHistoryData[context.userHistoryIndex].questions.length;
      const totalQuestions = context.adminQuestionCollection.length;
      setIsSubmitEnabled(answeredQuestions === totalQuestions);
    }
  }, [
    context.userHistoryData,
    context.adminQuestionCollection,
    context.userData.email,
  ]);
  function handleFinalResult() {
    console.log("click");
    let totalScore = 0;
    const temp = context.userHistoryData[context.userHistoryIndex];
    console.log(temp);

    const updatedQuestions = temp.questions.map((question) => {
      let questionScore = 0;
      if (question.isCorrect) {
        if (question.QuestionType === "mcqs") {
          questionScore = 10;
        } else if (question.QuestionType === "boolvalue") {
          questionScore = 5;
        }
      }

      totalScore += questionScore;
    });
    console.log(totalScore);
    const newQuiz = {
      quizid: Date.now(),
      quizTime: new Date().toISOString(),
      Questions: temp.questions,
      scoreCard: totalScore,
    };
   let tempUserHistoryData = context.userHistoryData[context.userHistoryIndex];
   tempUserHistoryData={
    ...tempUserHistoryData,
    scoreCard: totalScore,
   }
  context.setUserHistoryData((prev) => {
    const updatedHistory = [...prev];
    updatedHistory[context.userHistoryIndex] = {
      ...updatedHistory[context.userHistoryIndex],
      scoreCard: totalScore,
    };
    return updatedHistory;
  });

    const existingUserQuizData = context.quizData.find(quiz => quiz.email === temp.email);
    if (existingUserQuizData) {
      console.log("data")
      context.setQuizData(prevQuizData =>
        prevQuizData.map(quiz =>
          quiz.email === temp.email
            ? { ...quiz, quizzes: [...quiz.quizzes, newQuiz] }
            : quiz
        )
      );
    } else {

      console.log("data is no")
      context.setQuizData(prevQuizData => [
        ...prevQuizData,
        {
          email: temp.email,
          quizzes: [newQuiz]
        }
      ]);
    }
    
    navigate('/EmployeeDashboard/FinalResult', { replace: true });
  }

  return (
    <div className="flex m-auto flex-wrap w-1/2  justify-evenly">
      {context.adminQuestionCollection.length > 0 ? (
        context.adminQuestionCollection.map((value, index) => (
          <AllTask key={value.id} index={index} data={value} />
        ))
      ) : (
        <h1 className="text-[8rem] mt-16 text-green-600">No Question Yet</h1>
      )}
      {context.userData.role === "user" &&
        context.adminQuestionCollection.length > 0 && (
          <button
            onClick={handleFinalResult}
            disabled={!isSubmitEnabled}
            className={`bg-[#d92732] ${
              isSubmitEnabled ? "opacity-100 " : "opacity-40 cursor-not-allowed"
            }  text-white px-5 py-2 rounded-sm text-lg font-medium`}
          >
            Submit
          </button>
        )}
    </div>
  );
};

export default AllQuestionAdmin;
