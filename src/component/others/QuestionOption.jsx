import React, { useState } from "react";

const QuestionOption = () => {
  const [addInput, setaddInput] = useState([""]);
  console.log(addInput);
  function handlePlusButton() {
        console.log("click")
        setaddInput((prev)=>([...prev,""]))    
  }
  return (
    <div className="bg-black rounded-md w-2/3 m-auto mt-3 p-4 ">
      <div className="flex items-center justify-end mb-2">
        <button type="button" onClick={handlePlusButton} className="bg-[#d92732] text-white w-[30px] flex items-center justify-center h-[30px] text-lg font-medium rounded-[50%]">+</button>
      </div>
      {addInput.map((value, index) => (
        <div className="flex gap-3 mb-2" key={index}>
          <p >{index + 1}</p>
          <input type="text" name={`option ${index}`} className="bg-gray-800 w-3/4 p-2 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default QuestionOption;
