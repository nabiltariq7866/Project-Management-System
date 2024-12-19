import React, { useContext } from 'react'
import AppContext from '../../context/AuthContext'

const ChartBar = () => {
const context = useContext(AppContext);
console.log(context.quizData);


  return (
    <div>
      chartbar
    </div>
  )
}

export default ChartBar;
