import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useExaminatorStore } from '../../App';

const ExamLayout = () => {
  const { HTTP } = useExaminatorStore();

  const [time, setTime] = useState(130000);
  const [test, setTest] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getTest = async () => {
    await axios.get(`${HTTP}/test`)
      .then(res => {
        if (res.status >= 200 && res.status <= 226) {
          setTest(res.data[0]);
          setCurrentQuestion(res.data[0].questions[0]);
        }
      })
      .catch(console.error);
  }

  useEffect(() => {
    getTest();
  }, [])

  return (
    <div className='w-screen h-screen bg-white p-2 flex flex-col'>
      {test && (
        <>
          <div className='p-2 alk-sanet flex flex-col lg:flex-row items-center lg:justify-between'>
            <p className='text-3xl font-semibold text-teal-400 lg:w-4/12'>{test.testName}</p>
            <p className='text-3xl text-center text-teal-400 lg:w-4/12'>1 / 2</p>
            <p className='text-3xl text-red-400 lg:w-4/12 lg:text-end'>00:02:30</p>
          </div>
          <div className='p-2 flex flex-1 bpg-arial'>
            {currentQuestion && (
              <div className='container p-2 mx-auto mt-8 lg:mt-24 flex flex-col lg:flex-row gap-4 flex-auto'>
                <div className='lg:w-7/12 flex flex-col flex-auto'>
                  <div className='p-2 border border-0 border-teal-200 rounded-lg flex flex-col flex-auto'>
                    <div className='p-2 max-h-[200px] overflow-y-auto overflow-v rounded-lg mb-3 text-lg text-teal-500'>
                      {currentQuestion.question}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: currentQuestion.codePreview.replaceAll('\\n', '\n') }}>
                    </div>
                  </div>
                </div>
                <div className='lg:w-5/12 flex flex-col flex-auto'>
                  <div className='p-2 border border-0 rounded-lg border-teal-200 flex flex-col flex-auto items-center'>
                    <p className='p-2 mr-auto text-lg text-teal-500'>{currentQuestion.correctAnswers > 1 ? 'ერთზე მეტი სწორი პასუხი' : 'ერთი სწორი პასუხი'}</p>
                    {currentQuestion.answers.map((a, i) => {
                      return (
                        <div key={i} className="w-full flex flex-col 2xl:flex-row 2xl:items-center gap-3 py-4">
                          <div className="border flex items-center px-3 border-teal-300 bpg-arial rounded-md 2xl:w-7/12 dark:border-slate-300 min-h-10 max-h-[100px] overflow-y-auto overflow-v bg-white text-gray-600 dark:bg-slate-500 dark:text-gray-200" name="answer" placeholder="პასუხი...">{a.answer}</div>
                          <label htmlFor={`correctAns-${i}-${i}`} className="relative inline-flex gap-3 items-center cursor-pointer lg:w-5/12">
                            <input id={`correctAns-${i}-${i}`} type="checkbox" className="sr-only peer" />
                            <div className={`w-11 h-5 bg-white dark:bg-slate-300 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.1)] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500`}></div>
                            <span
                              className={`
                                  absolute w-4 h-4 top-[4px] left-[2px] peer-checked:left-[9px] rounded-full peer transition-all duration-500 peer-checked:translate-x-full
                                  flex items-center justify-center
                                  text-amber-500
                                  peer-checked:text-slate-800
                                  text-2xl
                                  bg-teal-400
                                  dark:bg-slate-500
                              `}>
                            </span>
                            <span className="hidden peer-checked:block text-emerald-400">სწორი პასუხი</span>
                            <span className="block peer-checked:hidden text-red-500 dark:text-red-400">არასწორი პასუხი</span>
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='p-2 alk-sanet border border-1 rounded-lg flex flex-[0] bg-white'>
            <button className='px-5 py-1 ml-auto bg-teal-400 hover:bg-teal-500 rounded-md text-white text-xl'>შემდეგი</button>
          </div>
        </>
      )}
    </div>
  )
}

export default ExamLayout