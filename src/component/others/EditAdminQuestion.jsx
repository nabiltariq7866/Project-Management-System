import React, { useContext, useEffect } from 'react'
import QuestionOption from './QuestionOption'
import QuestionOptionTureFalse from './QuestionOptionTureFalse'
import AppContext from '../../context/AuthContext'

const EditAdminQuestion = () => {
   const context =  useContext(AppContext)
  console.log(context.editAddInput)
   console.log(context.editAddInput.option)
   let data=context.editAddInput;
//    useEffect(() => {
//     if (data) {
      
//       context.setCorrectAnswer(data.option.indexOf(data.correctAnswer));

//     }
//   }, [data]);
// //    console.log(data.correctAnswer);
// //   const index = data.option.indexOf(data.correctAnswer) 
// //   console.log(index)
//  

    function handleSubmitQuestinAdmin(e){
        e.preventDefault();
        console.log("update click")
        const form = e.target;
        const formData=new FormData(e.target)
        let option=formData.getAll("option")
        let editData=Object.fromEntries(formData.entries())
        console.log(editData);
        context.setCorrectAnswer(option[context.correctAnswer]);
        let correctAnswer;
        {data.QuestionType==="boolvalue"?correctAnswer=context.correctAnswer:correctAnswer=option[context.correctAnswer]}
        console.log(correctAnswer)
        editData={
            ...data,
          ...editData,
          correctAnswer,
          option
        }     
        const newArray=context.adminQuestionCollection.map((dataPass)=>{
            if(editData.id===dataPass.id){
                return editData
            }
               return dataPass;      
        })
        console.log(newArray)
        context.setAdminQuestionCollection(newArray)
        context.setEditAddInput([''])
        context.setaddInput([''])
        context.setIsOpen(false)
        form.reset();

        
    }
  return (
   
    <div>
       <div className="p-5 bg-[#1c1c1c] m-auto mt-7 w-full rounded">
        <form  onSubmit={handleSubmitQuestinAdmin} className="flex flex-wrap w-full items-start justify-between ">
          
          <div className="w-full">
            <div>
              <h3 className="text-xl font-semibold amibold text-gray-300 mb-5">
                Update Question
              </h3>
              <input name="Question"
                className="text-2xl py-1 px-2 w-full rounded outline-none bg-transparent  border-[1px] border-t-gray-400  border-gray-400 mb-4"
                defaultValue={context.editAddInput.Question}
                type="text"
                placeholder="Update Question .."
                required
              />
              

            </div>
              {data.QuestionType==="boolvalue"&& <QuestionOptionTureFalse/>}
              {data.QuestionType==="mcqs"&& <QuestionOption data={context.editAddInput} />}
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
             Update Question
            </button>
          </div>
        </form>
      </div>
    
    </div>
  )
}

export default EditAdminQuestion
