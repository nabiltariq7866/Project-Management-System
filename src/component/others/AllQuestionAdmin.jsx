import React, { useContext } from 'react'
import AppContext from '../../context/AuthContext'
import AllTask from './AllTask';

const AllQuestionAdmin = () => {
const context = useContext(AppContext);

  return (
    <div className='flex m-auto flex-wrap w-1/2  justify-evenly'>
      {
        context.adminQuestionCollection.length>0 ? context.adminQuestionCollection.map((value,index)=><AllTask key={value.id} index={index} data={value}/>):
        <h1 className='text-[8rem] mt-16 text-green-600' >No Question Yet</h1>
      }
    </div>
  )
}

export default AllQuestionAdmin
