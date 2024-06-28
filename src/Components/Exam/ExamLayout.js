import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useExaminatorStore } from '../../App';
import ExamStarted from './ExamStarted';
import Precondition from './Precondition';
import ExamResult from './ExamResult';

const ExamLayout = () => {
  const { HTTP, userData, setUserData } = useExaminatorStore();

  const [test, setTest] = useState(null);
  const [examInfo, setExamInfo] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [fullScreen] = useState({ width: window.screen.width, height: window.screen.height });
  const [currentSize, setCurrentSize] = useState({ width: 0, height: 0 })
  const [disableScreen, setDisableScreen] = useState(false);

  const testRef = useRef();

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'C') || (e.ctrlKey && e.shiftKey && e.key === 'I')) e.preventDefault();
    })
    console.log(userData);
    if (userData.closed) {
      setIsTestFinished(true);
    } else {
      setTest(userData?.progress);
      setExamInfo(userData?.progress);
      setCurrentQuestion(userData?.progress?.questions.findLast(x => (x.startTime && !x.endTime) || (!x.startTime && !x.endTime)));
      setIsTestStarted(userData?.progress?.questions.some(x => x.startTime && !x.endTime));
    }
  }, []);

  function openFullscreen() {
    var elem = document.getElementById("test");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }


  useEffect(() => {
    var elem = document.getElementById("test");
    const a = window.addEventListener('resize', () => {
      setCurrentSize({ width: elem.offsetWidth, height: elem.offsetHeight });
    })

    return () => window.removeEventListener('resize', a);
  }, []);

  useEffect(() => {
    if (currentSize.width < fullScreen.width || currentSize.height < fullScreen.height) {
      setDisableScreen(true)
    } else {
      setDisableScreen(false);
    }
  }, [currentSize])


  const logout = async () => {
    await axios.post(`${HTTP}/logout`)
    .then(res => {
      if(res.status >= 200 && res.status <= 226) {
        setUserData(null);
      }
    })
    .catch(console.error);
  }

  return (
    <div id='test' ref={testRef} className='w-screen h-screen bg-white p-2 flex flex-col'>
      {(!isTestStarted && examInfo) && !isTestFinished && < Precondition logout={logout} examInfo={examInfo} setExamInfo={setExamInfo} setTest={setTest} setCurrentQuestion={setCurrentQuestion} setIsTestStarted={setIsTestStarted} openFullscreen={openFullscreen} />}
      {(isTestStarted && !isTestFinished) && disableScreen ? (
        <div className='flex items-center justify-center w-full h-full alk-sanet'>
          <button className="bg-emerald-400 text-xl text-white px-3 py-2 rounded-md hover:bg-emerald-500 mt-8" onClick={openFullscreen}>სრულ ეკრანზე დაბრუნება</button>
        </div>
      ) : (
        isTestStarted && !isTestFinished && < ExamStarted test={test} setTest={setTest} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} isTestFinished={isTestFinished} setIsTestFinished={setIsTestFinished} setIsTestStarted={setIsTestStarted} />
      )}
      {!isTestStarted && isTestFinished && <ExamResult logout={logout} />}
    </div>
  )
}

export default ExamLayout