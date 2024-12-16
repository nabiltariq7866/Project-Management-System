import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import AppContext from "../../context/AuthContext";
import CreateTask from "./CreateTask";
import Modal from "./Modal";
import EditAdminQuestion from "./EditAdminQuestion";
const AllTask = ({ index, data }) => {
  console.log(data.option);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const context = useContext(AppContext);
  function handleEditfun(data) {
    context.setEditAddInput(data);
    context.setaddInput(data.option);
    context.setIsOpen(true);
  }
  function handleDelete(id) {
    const newADminQuestion = context.adminQuestionCollection.filter(
      (data) => data.id !== id
    );
    context.setAdminQuestionCollection(newADminQuestion);
  }
  const handleAnswerClick = (userAns) => {
    if (context.userData.role === "user") {
      context.setUserData((prev) => ({ ...prev, selectedAns: userAns }));
      setSelectedAnswer(userAns);
      setIsAnswered(true);
    }
  };
  return (
    <div className="bg-[#1c1c1c] py-5 rounded flex items-start shrink-0 w-full mt-5">
      <div className=" py-2 mb-3 w-full  px-4 mx-3 flex flex-col justify-between rounded">
        <div className="flex justify-between items-center">
          <h2 className="bg-emerald-700 p-9 rounded-md text-xl font-semibold w-[80%] mb-2">
            <span className="text-2xl font-semibold">
              Question {index + 1} :
            </span>
            {data.Question}
          </h2>
          {context.userData.role === "admin" && (
            <div className="flex w-[20%] justify-evenly">
              <FaEdit
                onClick={() => handleEditfun(data)}
                className="text-[2.9rem] text-green-500 hover:text-red-700 cursor-pointer"
              />
              <Modal>
                <EditAdminQuestion />
              </Modal>
              <MdDelete
                onClick={() => handleDelete(data.id)}
                className="text-[2.9rem] text-green-500 hover:text-red-700 cursor-pointer"
              />
              <IoEye className="text-[2.9rem] text-green-500 hover:text-red-700 cursor-pointer" />
            </div>
          )}
        </div>
        <div className="flex flex-col flex-wrap justify-between items-start">
          {data.option.map((value) => {
            let backgroundColor = "";
            // if (isAnswered && context.userData.role === "user") {
            //   if (value === selectedAnswer) {
            //     backgroundColor =
            //       value === data.correctAnswer ? "bg-green-500" : "bg-red-500";
            //   }
            //   if (value === data.correctAnswer && value !== selectedAnswer) {
            //     backgroundColor = "bg-green-500";
            //   }
            // }

            return (
              <h3
                className={`shrink-0 cursor-pointer w-[550px] p-4 rounded-md mb-2 ${backgroundColor}`}
                onClick={() => handleAnswerClick(value)}
              >
                {value}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
