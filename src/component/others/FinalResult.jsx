import React, { useContext } from 'react'
import AppContext from '../../context/AuthContext'
import AllTask from './AllTask';

const FinalResult = () => {
  const context = useContext(AppContext);
  let data=context.userHistoryData[context.userHistoryIndex];
 
  return (
    <>
    {
      data?
    <div>
      <h1 className='text-center my-5 text-7xl text-yellow-600'>Final result</h1>
      <h1 className='text-center my-5 text-7xl p-4 rounded-md bg-green-600 inline-block text-white'>Final Score:{data.scoreCard}</h1>
    {
      data?.questions && data?.questions.map((value,index)=><AllTask key={value.id} index={index} data={value} finalResult={true}/>)
    }
    </div>:<div>
      No Reuslt Y
    </div>
}
    </>
  )
}

export default FinalResult
