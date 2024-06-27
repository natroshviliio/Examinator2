import React from 'react'
import { useExaminatorStore } from '../../App'

const ExamResult = () => {
const {userData} = useExaminatorStore();


  return (
    <div className='w-full h-full bg-white flex items-center justify-center alk-sanet'>
        <div className='text-[15rem] text-emerald-400'>{userData?.score}/{userData?.maxScore}</div>
    </div>
  )
}

export default ExamResult