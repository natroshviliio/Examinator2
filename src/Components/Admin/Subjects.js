import React from "react";

import { MdEdit } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import { RiAddLargeFill } from "react-icons/ri";

const Subjects = () => {
    return (
        <div className="p-3 flex flex-col h-full overflow-hidden">
            <div className="p-2 flex flex-wrap gap-4 border border-teal-300 rounded-md alk-sanet justify-center items-start h-full overflow-y-auto overflow-v">
                <button className="group py-2 px-5 text-teal-600 dark:text-slate-300 border border-teal-300 bg-teal-300 hover:bg-teal-400 dark:border-slate-500 dark:bg-slate-500 dark:hover:bg-slate-600 rounded-lg transition-all duration-300 flex items-center">
                    <span className="flex items-center gap-3">თემატიკის დამატება <RiAddLargeFill /></span>
                </button>
                <button className="group py-2 px-5 text-teal-500 dark:text-slate-300 border border-teal-300 hover:bg-teal-300 hover:text-white dark:border-slate-500 dark:hover:bg-slate-500 rounded-lg transition-all duration-300 flex items-center">
                    <span>მათემატიკა</span>
                    <button className="opacity-0 bg-amber-400 hover:bg-amber-500 p-1 rounded-full -ml-5 group-hover:ml-4 group-hover:opacity-100 transition-all duration-300"><MdEdit className="text-white" /></button>
                    <button className="opacity-0 bg-red-500 hover:bg-red-600 p-1 rounded-full -ml-5 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300"><BiSolidHide className="text-white" /></button>
                </button>
                <button className="group py-2 px-5 text-teal-500 dark:text-slate-300 border border-teal-300 hover:bg-teal-300 hover:text-white dark:border-slate-500 dark:hover:bg-slate-500 rounded-lg transition-all duration-300 flex items-center">
                    <span>პროგრამირება</span>
                    <button className="opacity-0 bg-amber-400 hover:bg-amber-500 p-1 rounded-full -ml-5 group-hover:ml-4 group-hover:opacity-100 transition-all duration-300"><MdEdit className="text-white" /></button>
                    <button className="opacity-0 bg-red-500 hover:bg-red-600 p-1 rounded-full -ml-5 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300"><BiSolidHide className="text-white" /></button>
                </button>
                <button className="group py-2 px-5 text-teal-500 dark:text-slate-300 border border-teal-300 hover:bg-teal-300 hover:text-white dark:border-slate-500 dark:hover:bg-slate-500 rounded-lg transition-all duration-300 flex items-center">
                    <span>ფიზიკა</span>
                    <button className="opacity-0 bg-amber-400 hover:bg-amber-500 p-1 rounded-full -ml-5 group-hover:ml-4 group-hover:opacity-100 transition-all duration-300"><MdEdit className="text-white" /></button>
                    <button className="opacity-0 bg-red-500 hover:bg-red-600 p-1 rounded-full -ml-5 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300"><BiSolidHide className="text-white" /></button>
                </button>
                <button className="group py-2 px-5 text-teal-500 dark:text-slate-300 border border-teal-300 hover:bg-teal-300 hover:text-white dark:border-slate-500 dark:hover:bg-slate-500 rounded-lg transition-all duration-300 flex items-center">
                    <span>ქიმია</span>
                    <button className="opacity-0 bg-amber-400 hover:bg-amber-500 p-1 rounded-full -ml-5 group-hover:ml-4 group-hover:opacity-100 transition-all duration-300"><MdEdit className="text-white" /></button>
                    <button className="opacity-0 bg-red-500 hover:bg-red-600 p-1 rounded-full -ml-5 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300"><BiSolidHide className="text-white" /></button>
                </button>
                <button className="group py-2 px-5 text-teal-500 dark:text-slate-300 border border-teal-300 hover:bg-teal-300 hover:text-white dark:border-slate-500 dark:hover:bg-slate-500 rounded-lg transition-all duration-300 flex items-center">
                    <span>ლიტერატურა</span>
                    <button className="opacity-0 bg-amber-400 hover:bg-amber-500 p-1 rounded-full -ml-5 group-hover:ml-4 group-hover:opacity-100 transition-all duration-300"><MdEdit className="text-white" /></button>
                    <button className="opacity-0 bg-red-500 hover:bg-red-600 p-1 rounded-full -ml-5 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300"><BiSolidHide className="text-white" /></button>
                </button>
            </div>
        </div>
    )
};

export default Subjects;
