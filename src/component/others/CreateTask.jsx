import React, { useState } from "react";
import QuestionOption from "./QuestionOption";
import QuestionOptionTureFalse from "./QuestionOptionTureFalse";
const CreateTask = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  function handleSelectedAnswer(e) {
    console.log(e.target.value)
    setSelectedAnswer(e.target.value)
    
  }
  function handleSubmitQuestinAdmin(e) {
    e.preventDefault();
    const formData=new FormData(e.target)
    const data=Object.fromEntries(formData.entries())
    console.log(data)
    
  }
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] m-auto mt-7 w-1/3 rounded">
        <form  onSubmit={handleSubmitQuestinAdmin} className="flex flex-wrap w-full items-start justify-between ">
          <div className="w-full">
            <div>
              <h3 className="text-xl font-semibold amibold text-gray-300 mb-5">
                Task Title
              </h3>
              <input name="Question"
                className="text-2xl py-1 px-2 w-full rounded outline-none bg-transparent  border-[1px] border-t-gray-400  border-gray-400 mb-4"
                type="text"
                placeholder="Put Question here.."
              />
              <div className="flex justify-between w-1/2 ">
                <label >
                  <input className="mr-2"
                    type="radio"
                    value="boolvalue"
                    name="selected"
                    checked={selectedAnswer==="boolvalue"}
                    onChange={handleSelectedAnswer}
                  />
                  True/false
                </label>
                <label>
                  <input
                  className="mr-2"
                    type="radio"
                    value="mcqs"
                   name="selected"
                   checked={selectedAnswer==="mcqs"}
                   onChange={handleSelectedAnswer}
                  />
                  Mcqs
                </label>
              </div>

            </div>
              {selectedAnswer==="boolvalue"&& <QuestionOptionTureFalse/>}
              {selectedAnswer==="mcqs"&& <QuestionOption/>}
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
