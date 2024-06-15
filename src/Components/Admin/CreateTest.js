import React, { useEffect, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsTrash3Fill } from "react-icons/bs";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CodeEditor from '@uiw/react-textarea-code-editor';
// import "@uiw/react-textarea-code-editor/dist.css";

import { AiOutlineFullscreen } from "react-icons/ai";
import CodePreviewModal from "./CodePreviewModal";
import { useExaminatorStore } from "../../App";

const CreateTest = () => {
    const { darkMode } = useExaminatorStore();

    const [slides, setSlides] = useState([
        {
            question: '',
            codeMode: false,
            selectedLanguage: { name: "C", value: "c" },
            code: '',
            codePreview: '',
            answers: [
                {
                    answer: '',
                    isCorrect: false
                },
            ]
        }
    ])
    const [slideDropdown, setSlideDropdown] = useState(false);
    const [slideNavigator, setSlideNavigator] = useState(0);

    const [selectLanguage, setSelectLanguage] = useState(false);

    const [languages] = useState([
        { name: "C", value: "c" },
        { name: "C++", value: "cpp" },
        { name: "C#", value: "csharp" },
        { name: "Python", value: "python" },
        { name: "Java", value: "java" },
        { name: "PHP", value: "php" },
        { name: "Ruby", value: "ruby" },
        { name: "Bash", value: "bash" },
        { name: "Kotlin", value: "kotlin" },
        { name: "R", value: "r" },
        { name: "JSON", value: "json" },
        { name: "MongoDB", value: "mongodb" },
        { name: "JavaScript", value: "js" },
        { name: "TypeScript", value: "typescript" },
        { name: "HTML", value: "html" },
        { name: "CSS", value: "css" },
        { name: "SCSS", value: "scss" },
        { name: "SASS", value: "sass" },
        { name: "JSX", value: "jsx" },
        { name: "TSX", value: "tsx" },
        { name: "SQL", value: "sql" },
        { name: "Graphql", value: "graphql" },
        { name: "ASP .NET", value: "aspnet" },
        { name: "CSHTML", value: "cshtml" },
    ])

    const [codePreview, setCodePreview] = useState('');

    const [isCodePreview, setIsCodePreview] = useState(false);
    const showCodePreview = (p) => {
        setCodePreview(p);
        setIsCodePreview(true);
    }
    const hideCodePreview = () => {
        setCodePreview('');
        setIsCodePreview(false);
    }

    //CREEATE TEST
    const insertNewTest = () => {
        const _slides = [
            ...slides,
            {
                question: '',
                codeMode: false,
                selectedLanguage: { name: "C", value: "c" },
                code: '',
                codePreview: '',
                answers: [
                    {
                        answer: '',
                        isCorrect: false
                    },
                ]
            }
        ];
        setSlides(_slides);
        // swiper.slideTo(_slides.length - 1, 1000);
        // console.log(swiper);
    }

    const deleteCurrentTest = (i) => {
        let _slides = [...slides];
        _slides = _slides.filter((_, j) => j !== i);
        setSlides(_slides);
    }

    const handleChangeQuestion = (e, i) => {
        const _slides = [...slides];
        _slides[i].question = e.target.value;
        setSlides(_slides);
    }

    const handleChangeCodeMode = (e, i) => {
        const _slides = [...slides];
        _slides[i].codeMode = e.target.checked;
        setSlides(_slides);
    }

    const handleChangeLanguage = (lang, i) => {
        const _slides = [...slides];
        _slides[i].selectedLanguage = lang;
        setSelectLanguage(false);
        setSlides(_slides);
    }

    const handleChangeCode = (e, i) => {
        const _slides = [...slides];
        _slides[i].code = e.target.value;
        const preview = document.getElementById(`editor-${i}`).parentNode.childNodes[1];
        _slides[i].codePreview = `<div id='editor-preview' data-color-mode=${darkMode ? 'dark' : 'light'} class='w-tc-editor !text-[1rem] !bg-white dark:!bg-slate-600 rounded-md !border !border-teal-300 dark:!border-slate-300 bpg-arial overflow-v'>${preview?.outerHTML}</div>`;
        setSlides(_slides);
    }

    const handleKeyDown = (e, i) => {
        if (e.key === 'Tab') {
            const editor = e.target;
            e.preventDefault();

            const start = editor.selectionStart;
            const end = editor.selectionEnd;

            const tabSpaces = '       ';

            editor.value = editor.value.substring(0, start) + tabSpaces + editor.value.substring(end);

            editor.selectionStart = editor.selectionEnd = start + tabSpaces.length;
            const _slides = [...slides];
            _slides[i].code = editor.value;
            const preview = document.getElementById(`editor-${i}`).parentNode.childNodes[1];
            _slides[i].codePreview = `<div id='editor-preview' data-color-mode=${darkMode ? 'dark' : 'light'} class='w-tc-editor !text-[1rem] !bg-white dark:!bg-slate-600 rounded-md !border !border-teal-300 dark:!border-slate-300 bpg-arial overflow-v'>${preview?.outerHTML}</div>`;
            setSlides(_slides);
        }
    };

    const handleChangeAnswer = (e, i, j) => {
        const _slides = [...slides];
        _slides[i].answers[j].answer = e.target.value;
        setSlides(_slides);
    }

    const handleChangeAnswerIsCorrect = (e, i, j) => {
        const _slides = [...slides];
        _slides[i].answers[j].isCorrect = e.target.checked;
        setSlides(_slides);
    }

    const handleAddNextAnswer = (i) => {
        const _slides = [...slides];
        _slides[i].answers = [
            ..._slides[i].answers,
            {
                answer: '',
                isCorrect: false
            },
        ]

        setSlides(_slides);
    }

    const handleAdd4StandardAnswers = (i) => {
        const _slides = [...slides];
        _slides[i].answers = [
            {
                answer: '',
                isCorrect: false
            },
            {
                answer: '',
                isCorrect: false
            },
            {
                answer: '',
                isCorrect: false
            },
            {
                answer: '',
                isCorrect: false
            },
        ]

        setSlides(_slides);
    }

    const deleteCurrentAnswer = (i, j) => {
        const _slides = [...slides];
        _slides[i].answers = _slides[i].answers.filter((_, k) => k !== j);
        setSlides(_slides);
    }

    return (
        <div className="p-3 flex flex-col" style={{ height: "calc(100% - 52px)" }}>
            <div className="relative p-2 pt-3 border border-gray-300 dark:border-slate-400 rounded-md flex flex-col lg:flex-row gap-3 flex-0">
                <div className="absolute top-[-8px] left-[8px] text-xs bg-white dark:bg-slate-700 transition-colors duration-700">
                    <span className="text-gray-600 dark:text-slate-200">საერთო პარამეტრები</span>
                </div>
                <div className="relative w-full lg:w-2/12 group">
                    <input type="text" className="py-1 px-2 rounded-s border-gray-300 border-e-0 w-4/12 focus:ring-0 focus:border-gray-300 text-center dark:bg-slate-400 dark:text-slate-700 placeholder:dark:text-slate-200 dark:border-slate-300" placeholder="00" />
                    <input type="text" className="py-1 px-2 border-gray-300 w-4/12 focus:ring-0 focus:border-gray-300 text-center dark:bg-slate-400 dark:text-slate-700 placeholder:dark:text-slate-200 dark:border-slate-300" placeholder="00" />
                    <input type="text" className="py-1 px-2 rounded-e border-gray-300 border-s-0 w-4/12 focus:ring-0 focus:border-gray-300 text-center dark:bg-slate-400 dark:text-slate-700 placeholder:dark:text-slate-200 dark:border-slate-300" placeholder="00" />
                    <div className="bg-gray-800 text-white absolute bottom-[115%] left-[50%] translate-x-[-50%] hidden group-hover:block px-3 py-1 rounded-md text-sm z-10">
                        <p>ტესტის დრო</p>
                        <RiArrowDownSFill className="absolute top-[68%] text-gray-800 w-5 h-5 left-[50%] translate-x-[-50%]" style={{ overflow: "overlay" }} />
                    </div>
                </div>
                <div className="flex gap-3 flex-col md:flex-row justify-start md:items-center">
                    <label htmlFor="ch1" className="relative inline-flex gap-3 items-center cursor-pointer">
                        <input id="ch1" type="checkbox" className="sr-only peer" />
                        <div
                            className={`w-11 h-5 bg-white dark:bg-slate-300 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.1)] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500`}></div>
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
                        <span className="mt-0 block peer-checked:hidden text-gray-600 dark:text-slate-200">ინდივიდუალური დრო</span>
                        <span className="mt-0 hidden peer-checked:block text-gray-600 dark:text-slate-200">საერთო დრო</span>
                    </label>
                    <button className="bg-teal-300 dark:bg-slate-400 text-gray-600 dark:text-white px-3 py-1 rounded-md hover:bg-teal-400 dark:hover:bg-slate-500 w-fit" onClick={insertNewTest}>მომდევნო შეკითხვის დამატება</button>
                    <div className="relative inline-block text-left w-fit bpg-arial">
                        <div>
                            <button type="button" onClick={() => setSlideDropdown(!slideDropdown)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-slate-500 dark:hover:bg-slate-400 dark:hover:ring-slate-400 dark:ring-slate-500 dark:text-gray-100 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                ტესტის ნავიგატორი
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {slideDropdown && (
                            <div className="absolute left-[0] z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[350px] overflow-y-auto overflow-v" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    {slides.map((_, j) => {
                                        return (
                                            <button key={j} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={(() => setSlideNavigator(j))}>შეკითხვა {j + 1}</button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center lg:ml-auto">
                    <button className="bg-teal-300 dark:bg-slate-400 text-gray-600 dark:text-white px-3 py-1 rounded-md hover:bg-teal-400 dark:hover:bg-slate-500">დასრულება</button>
                </div>
            </div>
            <div className="p-2 mt-3 border border-gray-300 dark:border-slate-400 rounded-md w-full overflow-hidden flex flex-1">
                <div className="grid w-full max-w-full overflow-hidden">
                    <Swiper slidesPerView={1} pagination={{ dinamycBullets: true, clickable: true }} modules={[Pagination]} className="swiper bg-gray-100 dark:bg-slate-600/[.3] rounded-lg">
                        <SwipeToLast lastSwiper={slides.length} />
                        <SwipeToIndex slideNavigator={slideNavigator} />
                        {slides?.map((slide, i) => {
                            return (
                                <SwiperSlide key={i} className="flex overflow-hidden">
                                    <div className="p-2 h-full flex flex-col overflow-hidden">
                                        <div className="bg-teal-200 s dark:bg-slate-500 rounded-full p-3 shadow-[2px_2px_5px_rgba(0,0,0,0.3)] flex items-center">
                                            <span className="text-gray-700 dark:text-slate-200">შეკითხვა {i + 1}</span>
                                            {i > 0 && <span className="ml-auto mr-4 text-2xl cursor-pointer text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600" onClick={() => deleteCurrentTest(i)}><BsTrash3Fill /></span>}
                                        </div>
                                        <div className="p-2 w-full flex flex-col overflow-hidden">
                                            <div className="p-2 w-full mt-3 flex flex-col lg:flex-row gap-5 overflow-hidden">
                                                <div id="editor" className="lg:w-5/12 p-2 flex flex-col overflow-hidden gap-3">
                                                    <textarea className="w-full bpg-arial rounded-md border-teal-300 focus:ring-teal-300 focus:border-teal-300 dark:border-slate-300 dark:focus:ring-slate-300 bg-white text-gray-600 dark:bg-slate-500 dark:text-gray-200 dark:placeholder:text-gray-200 min-h-12 max-h-[16rem]" name="question" value={slide.question} onChange={e => handleChangeQuestion(e, i)} placeholder="შეკითხვა..."></textarea>
                                                    <label htmlFor={`codeMode-${i}`} className="relative inline-flex gap-3 items-center cursor-pointer">
                                                        <input id={`codeMode-${i}`} type="checkbox" checked={slide.codeMode} onChange={e => handleChangeCodeMode(e, i)} className="sr-only peer" />
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
                                                        <span className="text-emerald-400 dark:text-slate-200 transition-all duration-300">კოდი</span>
                                                    </label>
                                                    {slide.codeMode && (
                                                        <>
                                                            <div className="flex gap-3">
                                                                <div className="relative inline-block text-left w-fit bpg-arial">
                                                                    <div>
                                                                        <button type="button" onClick={() => setSelectLanguage(!selectLanguage)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-slate-500 dark:hover:bg-slate-400 dark:hover:ring-slate-400 dark:ring-slate-500 dark:text-gray-100 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                                                            {slide.selectedLanguage.name}
                                                                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                    {selectLanguage && (
                                                                        <div className="absolute left-[0] z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[350px] overflow-y-auto overflow-v" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                                                            <div className="py-1" role="none">
                                                                                {languages.map((x, j) => {
                                                                                    return (
                                                                                        <button key={j} className="block px-4 py-2 text-start text-sm text-gray-700 dark:text-gray-200 w-full" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={(() => handleChangeLanguage(x, i))}>{x.name}</button>
                                                                                    )
                                                                                })}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <button className="bg-white dark:bg-slate-500 text-gray-600 dark:text-white px-1 py-0 text-3xl rounded-md hover:bg-gray-200 dark:hover:bg-slate-500" onClick={() => showCodePreview(slide.codePreview)}><AiOutlineFullscreen /></button>
                                                            </div>
                                                            <div className="overflow-y-auto overflow-v">
                                                                <CodeEditor id={`editor-${i}`} data-color-mode={darkMode ? 'dark' : 'light'} minHeight={300} onKeyDown={e => handleKeyDown(e, i)} value={slide.code} onKeyUp={e => handleChangeCode(e, i)} language={slide.selectedLanguage.value} placeholder="დაწერეთ კოდი" className="p-2 !text-[1rem] !bg-white dark:edtr dark:!bg-slate-600 rounded-md !border !border-teal-300 dark:!border-slate-300 bpg-arial overflow-v dark:placeholder:text-gray-200" />
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="p-2 lg:w-7/12 flex flex-col gap-4 overflow-y-auto overflow-v">
                                                    {slide.answers.map((answer, j) => {
                                                        return (
                                                            <div key={j} className="relative p-3 border border-teal-300 rounded">
                                                                <div className="absolute px-2 text-sm top-[-9px] left-[10px] bg-gray-100 dark:bg-[#39475b] transition-colors duration-700 rounded-full"><span className="text-teal-500 dark:text-slate-200">პასუხი {j + 1}</span></div>
                                                                <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-3">
                                                                    <textarea className="border-teal-300 bpg-arial rounded-md 2xl:w-7/12 focus:ring-teal-300 focus:border-teal-300 dark:border-slate-300 dark:focus:ring-slate-300 min-h-10 max-h-[5rem] overflow-y-auto overflow-v bg-white text-gray-600 dark:bg-slate-500 dark:text-gray-200 dark:placeholder:text-gray-200" name="answer" value={answer.answer} onChange={e => handleChangeAnswer(e, i, j)} placeholder="პასუხი..."></textarea>
                                                                    <label htmlFor={`correctAns-${i}-${j}`} className="relative inline-flex gap-3 items-center cursor-pointer">
                                                                        <input id={`correctAns-${i}-${j}`} type="checkbox" checked={answer.isCorrect} onChange={e => handleChangeAnswerIsCorrect(e, i, j)} className="sr-only peer" />
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
                                                                    {j > 0 && <span className="ml-auto mr-4 text-2xl cursor-pointer text-red-600 hover:text-red-700" onClick={() => deleteCurrentAnswer(i, j)}><BsTrash3Fill /></span>}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                    <div className="flex flex-col xl:flex-row gap-3">
                                                        <button className="bg-teal-300 dark:bg-slate-400 text-gray-600 dark:text-white px-3 py-1 rounded-md hover:bg-teal-400 dark:hover:bg-slate-500 lg:w-6/12" onClick={() => handleAddNextAnswer(i)}>სავარაუდო პასუხის დამატება</button>
                                                        <button className="bg-teal-300 dark:bg-slate-400 text-gray-600 dark:text-white px-3 py-1 rounded-md hover:bg-teal-400 dark:hover:bg-slate-500 lg:w-6/12" onClick={() => handleAdd4StandardAnswers(i)}>სტანდარტული 4 სავარაუდო პასუხი</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            {isCodePreview && <CodePreviewModal darkMode={darkMode} hideCodePreview={hideCodePreview} codePreview={codePreview} />}
        </div>
    );
};

const SwipeToLast = ({ lastSwiper }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(lastSwiper);
    }, [lastSwiper]);

    return null;
}

const SwipeToIndex = ({ slideNavigator }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(slideNavigator, 2000);
    }, [slideNavigator]);

    return null;
}

export default CreateTest;
