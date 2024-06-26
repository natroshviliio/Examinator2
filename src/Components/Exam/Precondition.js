import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Precondition = ({ test, setTest, setCurrentQuestion, setIsTestStarted }) => {
    const [testInformation, setTestInformation] = useState({});

    useEffect(() => {
        console.log(test);
        if (test) {
            setTestInformation({
                testName: test.testName,
                sumOfTime: test.isGeneralTime ? test.testTime :
                    test.questions.map(x => x.individualTime).reduce((a, b) => a + b, 0),
                questionsLength: test.questions.length,
                maxScore: test.generalDistribution ? test.maxScore :
                    test.questions.map(x => x.individualScore).reduce((a, b) => a + b, 0),
                isGeneralTime: test.isGeneralTime
            })
        }
    }, [])

    return (
        <div className="h-full w-full p-3 alk-sanet text-teal-500">
            <div className="text-5xl text-center font-semibold">მოგესალმებით</div>
            <div className="container mx-auto p-2 mt-12 flex flex-col items-center">
                <div className="text-lg">ტესტის დასახელება: <b>{testInformation.testName}</b></div>
                <div className="text-lg mt-2">ტესტის ჯამური დრო: <b>{testInformation.sumOfTime}</b></div>
                <div className="text-lg mt-2">კითხვების რაოდენობა: <b>{testInformation.questionsLength}</b></div>
                <div className="text-lg mt-2">ქულების მაქსიმალური რაოდენობა: <b>{testInformation.maxScore}</b></div>
                <div className="text-lg mt-2 flex gap-3 items-center">ინდივიდუალური დრო ტესტზე: {testInformation.isGeneralTime ? <AiOutlineClose className="text-red-400" /> : <FaCheck className="text-emerald-400" />}</div>
                <div className="mt-5 text-center"><i><b>გაითვალისწინეთ რომ ტესტში შესაძლოა შეგხვდეთ კითხვა რომელიც შეიცავს ერთზე მეტ სწორ პასუხს.</b></i></div>
                <div className="mt-5 text-lg"><b>გისურვებთ წარმატებას</b></div>
                <button className="px-6 py-1 text-lg bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 text-white rounded-md mt-8">დაწყება</button>
                <button className="px-6 py-1 text-lg bg-red-400 hover:bg-red-500 active:bg-red-600 text-white rounded-md mt-3">გაუქმება</button>
            </div>
        </div>
    )
};

export default Precondition;
