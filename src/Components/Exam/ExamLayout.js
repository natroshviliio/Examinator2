import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useExaminatorStore } from '../../App';
import ExamStarted from './ExamStarted';
import Precondition from './Precondition';

const ExamLayout = () => {
  const { HTTP, userData } = useExaminatorStore();

  const [test, setTest] = useState(null);
  const [examInfo, setExamInfo] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isTestStarted, setIsTestStarted] = useState(false);

  // const getTest = async () => {
  //   await axios.get(`${HTTP}/test`)
  //     .then(res => {
  //       if (res.status >= 200 && res.status <= 226) {
  //         setTest(res.data[0]);
  //         setCurrentQuestion(res.data[1].questions[1]);
  //       }
  //     })
  //     .catch(console.error);
  // }

  useEffect(() => {
    console.log(userData);
    setTest(userData?.progress);
    setExamInfo(userData?.progress);
    setCurrentQuestion(userData?.progress?.questions.findLast(x => x.startTime && !x.endTime));
    setIsTestStarted(userData?.progress?.questions.some(x => x.startTime));
  }, [])

  return (
    <div className='w-screen h-screen bg-white p-2 flex flex-col'>
      {isTestStarted && <ExamStarted test={test} setTest={setTest} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />}
      {!isTestStarted && <Precondition examInfo={examInfo} setTest={setTest} setCurrentQuestion={setCurrentQuestion} setIsTestStarted={setIsTestStarted} />}
    </div>
  )
}

export default ExamLayout