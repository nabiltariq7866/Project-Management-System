import React, { useContext, useState } from 'react'
import AppContext from '../../context/AuthContext'
import QuizDetails from './QuizDetails';
import Modal from './Modal';

const AllQuizDetails = () => {
   const context = useContext(AppContext);
   const [selectedQuiz, setSelectedQuiz] = useState(null);
   console.log(selectedQuiz);
   console.log(context.quizData);
   function handleButtonClick(email){
   console.log(email)
    setSelectedQuiz(email)
    context.setIsOpen(true);
    // console.log("emailclick odel");
   }
  return (
    <div className='max-w-[450px] min-h-52 bg-gray-600 p-6 m-auto flex flex-col items-start mt-[150px] rounded-md'>
       {context.quizData.map(quiz=><button onClick={()=>handleButtonClick(quiz)} className='underline'>{quiz.email}</button>)}
      {selectedQuiz && (<Modal> <QuizDetails selectedQuiz={selectedQuiz} setSelectedQuiz={setSelectedQuiz}
      /></Modal>
      )} 
    </div>
    
  )
}

export default AllQuizDetails
