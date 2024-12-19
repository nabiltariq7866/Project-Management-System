import React from 'react'
import AllTask from './AllTask';

const SelectedQuizdetail = ({selectedQuiz}) => {
    console.log(selectedQuiz);
  return (
    <div className='h-[700px]  p-4 rounded-md overflow-x-auto' style={{backgroundImage:'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'}}>
        <h1 className='text-[30px] font-semibold text-[#a8eb12] underline'>Score:{selectedQuiz.scoreCard}</h1>
        {
            selectedQuiz.Questions.map((quiz,index)=><AllTask key={quiz.questionId} index={index} data={quiz} finalResult={true}/>)
        }
    </div>
  )
}

export default SelectedQuizdetail
