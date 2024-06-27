import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useExaminatorStore } from '../../App';
import ExamStarted from './ExamStarted';
import Precondition from './Precondition';
import ExamResult from './ExamResult';

const ExamLayout = () => {
  const { HTTP, userData } = useExaminatorStore();

  const [test, setTest] = useState(null);
  const [examInfo, setExamInfo] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);

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
    if (userData.closed) {
      setIsTestFinished(true);
    } else {
      setTest(userData?.progress);
      setExamInfo(userData?.progress);
      setCurrentQuestion(userData?.progress?.questions.findLast(x => x.startTime && !x.endTime));
      setIsTestStarted(userData?.progress?.questions.some(x => x.startTime && !x.endTime));
    }
    console.log(userData);
  }, [])

  return (
    <div className='w-screen h-screen bg-white p-2 flex flex-col'>
      {isTestStarted && !isTestFinished && < ExamStarted test={test} setTest={setTest} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} isTestFinished={isTestFinished} setIsTestFinished={setIsTestFinished} setIsTestStarted={setIsTestStarted} />}
      {!isTestStarted && examInfo && !isTestFinished && < Precondition examInfo={examInfo} setExamInfo={setExamInfo} setTest={setTest} setCurrentQuestion={setCurrentQuestion} setIsTestStarted={setIsTestStarted} />}
      {!isTestStarted && isTestFinished && <ExamResult />}
    </div>
  )
}

export default ExamLayout