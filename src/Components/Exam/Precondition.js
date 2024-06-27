import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useExaminatorStore } from "../../App";

const Precondition = ({ examInfo, setExamInfo, setTest, setCurrentQuestion, setIsTestStarted, openFullscreen }) => {
    const { HTTP } = useExaminatorStore();

    const [testInformation, setTestInformation] = useState({
        testName: '',
        sumOfTime: () => { },
        questionsLength: 0,
        maxScore: 0,
        boundaryPercentage: 0,
        boundaryCorrectAns: 0,
        isGeneralTime: false,
    });

    useEffect(() => {
        if (examInfo) {
            setTestInformation({
                testName: examInfo.testName,
                sumOfTime: () => {
                    const time = (examInfo.isGeneralTime ? examInfo.testTime :
                        examInfo.questions.map(x => x.individualTime).reduce((a, b) => a + b, 0)) / 1000;

                    const h = Math.floor(time / 60 / 60).toString().padStart(2, '0');
                    const m = Math.floor((time / 60) % 60).toString().padStart(2, '0');
                    const s = Math.floor(time % 60).toString().padStart(2, '0');

                    return `${h}:${m}:${s}`;
                },
                questionsLength: examInfo.questions.length,
                maxScore: examInfo.generalDistribution ? examInfo.maxScore :
                    examInfo.questions.map(x => x.individualScore).reduce((a, b) => a + b, 0),
                boundaryPercentage: examInfo.boundary,
                boundaryCorrectAns: (examInfo.boundary * examInfo.questions.length) / 100,
                isGeneralTime: examInfo.isGeneralTime
            })
        }
    }, []);

    const startExam = async () => {
        const _examInfo = { ...examInfo };
        const _exIdx = _examInfo.questions.findIndex(x => (x.startTime && !x.endTime) || (!x.startTime && !x.endTime));
        _examInfo.questions[_exIdx].startTime = new Date().getTime() + _examInfo.questions[_exIdx].individualTime;
        setTest(_examInfo);
        setCurrentQuestion(_examInfo.questions[_exIdx]);
        setIsTestStarted(true);

        await axios.post(`${HTTP}/updateexamstatus`, { test: _examInfo })
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    openFullscreen();
                }
            })
            .catch(console.error);
    }

    return (
        <div className="h-full w-full p-3 alk-sanet text-teal-500">
            <div className="text-5xl text-center font-semibold">მოგესალმებით</div>
            <div className="container mx-auto p-2 mt-12 flex flex-col items-center">
                <div className="text-lg">ტესტის დასახელება: <b>{testInformation.testName}</b></div>
                <div className="text-lg mt-2">ტესტის ჯამური დრო: <b>{testInformation.sumOfTime()}</b></div>
                <div className="text-lg mt-2">კითხვების რაოდენობა: <b>{testInformation.questionsLength}</b></div>
                <div className="text-lg mt-2">ქულების მაქსიმალური რაოდენობა: <b>{testInformation.maxScore}</b></div>
                <div className="text-lg mt-2">გადამსვლელი ზღვარი[%]: <b>{testInformation.boundaryPercentage}%</b></div>
                <div className="text-lg mt-2">გადამსვლელი ზღვარი: <b>{testInformation.boundaryCorrectAns} სწორი პასუხი</b></div>
                <div className="text-lg mt-2 flex gap-3 items-center">ინდივიდუალური დრო ტესტზე: {testInformation.isGeneralTime ? <AiOutlineClose className="text-red-400" /> : <FaCheck className="text-emerald-400" />}</div>
                <div className="mt-5 text-center"><i><b>გაითვალისწინეთ რომ ტესტში შესაძლოა შეგხვდეთ კითხვა რომელიც შეიცავს ერთზე მეტ სწორ პასუხს.</b></i></div>
                <div className="mt-5 text-lg"><b>გისურვებთ წარმატებას</b></div>
                <button className="px-6 py-1 text-lg bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 text-white rounded-md mt-8" onClick={startExam}>დაწყება</button>
                <button className="px-6 py-1 text-lg bg-red-400 hover:bg-red-500 active:bg-red-600 text-white rounded-md mt-3">გაუქმება</button>
            </div>
        </div>
    )
};

export default Precondition;
