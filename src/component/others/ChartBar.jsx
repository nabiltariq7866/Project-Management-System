import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AuthContext";

const ChartBar = ({ data }) => {
  console.log(data);
  const context = useContext(AppContext);
  const [optionCounts, setOptionCounts] = useState({});

  //   useEffect(() => {
  //     const countOptions = () => {
  //       const counts = {};

  //       // Loop through each user in the context quizData
  //       context.quizData.forEach((user) => {
  //         // Loop through each quiz of the user
  //         user.quizzes.forEach((quiz) => {
  //           // Loop through each question in the quiz
  //           quiz.Questions.forEach((question) => {
  //             console.log(question)
  //             const selectedOption = question.selectedOption;
  //             if (selectedOption !== undefined) {
  //               // Count the selected option
  //               counts[selectedOption] = (counts[selectedOption] || 0) + 1;
  //             }
  //           });
  //         });
  //       });

  //       // Update state with the option counts
  //       setOptionCounts(counts);
  //     };

  //     if (context.quizData) {
  //       countOptions();
  //     }
  //   }, [context.quizData]);

  return <div>chartbar</div>;
};

export default ChartBar;
