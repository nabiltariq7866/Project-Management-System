import React, { useContext } from 'react'
import AppContext from '../../context/AuthContext'
import AllTask from './AllTask';
import { useNavigate,replace } from 'react-router-dom';
const AllQuestionAdmin = () => {
const context = useContext(AppContext);
const navigate= useNavigate();
  function handleFinalResult(){
    console.log("click");
    // navigate('/EmployeeDashboard/FinalResult', { replace: true })

  }
  return (
    <div className='flex m-auto flex-wrap w-1/2  justify-evenly'>
      {
        context.adminQuestionCollection.length>0 ? context.adminQuestionCollection.map((value,index)=><AllTask key={value.id} index={index} data={value}/>):
        <h1 className='text-[8rem] mt-16 text-green-600' >No Question Yet</h1>
      }
      {context.userData.role==="user"&& <button  onSubmit={handleFinalResult}  className="bg-[#d92732] text-white px-5 py-2 rounded-sm text-lg font-medium">Submit</button>}
    </div>
  )
}

export default AllQuestionAdmin
