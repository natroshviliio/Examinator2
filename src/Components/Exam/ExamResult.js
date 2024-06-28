import React, { useEffect, useState } from 'react'
import { useExaminatorStore } from '../../App'

const ExamResult = ({logout}) => {
  const { userData } = useExaminatorStore();

  const [progressPercent, setProgressPercent] = useState(0);
  const [progressMaxPercent, setProgressMaxPercent] = useState(0);

  useEffect(() => {
    if (userData) {
      setTimeout(() => {
        setProgressMaxPercent(((userData.score * 100) / userData.maxScore));
        setProgressPercent(1);
      }, 500);
    }
  }, [])

  useEffect(() => {
    let interval;
    if (progressPercent < progressMaxPercent) {
      interval = setInterval(() => {
        setProgressPercent(p => p + (progressMaxPercent / 212))
      }, 5);

    } else {
      setProgressPercent(progressMaxPercent);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progressPercent])


  return (
    <div className='w-full h-full bg-white flex flex-col items-center justify-center alk-sanet'>
      <div className='w-[22rem] h-[22rem] relative progress-bar' style={{ background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(rgb(115, 204, 103) ${progressPercent}%, rgba(0, 0, 0, 0.1) 0)` }}>
        <div className='absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] rotate-[-180deg] text-center'>
          <div className='text-emerald-500 text-4xl'><b>{progressPercent.toFixed(2)}%</b></div>
          <div className='text-[2rem] text-emerald-400'>{userData?.score}/{userData?.maxScore}</div>
        </div>
      </div>
      <div className={`${progressMaxPercent < userData?.progress.boundary ? 'text-red-500' : 'text-emerald-500'} text-2xl text-center mt-8`}>
        {progressMaxPercent < userData?.progress.boundary ?
          <span>სამწუხაროდ თქვენ ვერ დააგროვეთ სწორი პასუხების საკმარისი ზღვრული რაოდენობა</span>
          :
          <span>გილოცავთ, თქვენ გადალახეთ ზღვარი!</span>
        }
      </div>
      <button className="bg-red-400 text-white px-3 py-1 rounded-md hover:bg-red-500 mt-8" onClick={logout}>დასრულება</button>
    </div>
  )
}

export default ExamResult