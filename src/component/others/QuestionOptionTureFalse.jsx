import React from "react";

const QuestionOptionTureFalse = () => {
  return (
    <div className="flex gap-3">
      <label>
        <input
          className="mr-2"
          type="radio"
          value="true"
          name="option"
        
        />
        True
      </label>
      <label>
        <input
          className="mr-2"
          type="radio"
          value="false"
          name="option"
        />
        False
      </label>
    </div>
  );
};

export default QuestionOptionTureFalse;
