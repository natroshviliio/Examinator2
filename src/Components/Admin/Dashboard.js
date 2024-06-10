import React from "react";

import { IoBookSharp } from "react-icons/io5";
import { RiSurveyFill } from "react-icons/ri";
import { MdTask } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div className="px-3 py-2 flex flex-col md:flex-row items-start items-center md:justify-start gap-3 w-full">
            <div className="p-4 bg-teal-100/25 hover:bg-teal-100 dark:bg-slate-500/25 dark:hover:bg-slate-500/50 border border-teal-400 dark:border-slate-500 rounded-md w-11/12 md:w-4/12 lg:w-3/12 text-teal-500 dark:text-slate-400 shadow-lg transition-colors duration-500">
                <div className="flex justify-center text-7xl py-3">
                    <IoBookSharp />
                </div>
                <div className="text-center">
                    <p className="text-2xl">თემატიკები</p>
                    <button className="mt-6 py-1 px-5 rounded border border-teal-500 hover:bg-teal-500 hover:text-white dark:border-slate-400 dark:hover:bg-slate-400 transition-colors duration-300">დამატება</button>
                </div>
            </div>
            <div className="p-4 bg-teal-100/25 hover:bg-teal-100 dark:bg-slate-500/25 dark:hover:bg-slate-500/50 border border-teal-400 dark:border-slate-500 rounded-md w-11/12 md:w-4/12 lg:w-3/12 text-teal-500 dark:text-slate-400 shadow-lg transition-colors duration-500">
                <div className="flex justify-center text-7xl py-3">
                    <MdTask />
                </div>
                <div className="text-center">
                    <p className="text-2xl">ტესტები</p>
                    <button className="mt-6 py-1 px-5 rounded border border-teal-500 hover:bg-teal-500 hover:text-white dark:border-slate-400 dark:hover:bg-slate-400 transition-colors duration-300">დამატება</button>
                </div>
            </div>
            <div className="p-4 bg-teal-100/25 hover:bg-teal-100 dark:bg-slate-500/25 dark:hover:bg-slate-500/50 border border-teal-400 dark:border-slate-500 rounded-md w-11/12 md:w-4/12 lg:w-3/12 text-teal-500 dark:text-slate-400 shadow-lg transition-colors duration-500">
                <div className="flex justify-center text-7xl py-3">
                    <FaUserGroup />
                </div>
                <div className="text-center">
                    <p className="text-2xl">ჯგუფები</p>
                    <button className="mt-6 py-1 px-5 rounded border border-teal-500 hover:bg-teal-500 hover:text-white dark:border-slate-400 dark:hover:bg-slate-400 transition-colors duration-300">დამატება</button>
                </div>
            </div>
            <div className="p-4 bg-teal-100/25 hover:bg-teal-100 dark:bg-slate-500/25 dark:hover:bg-slate-500/50 border border-teal-400 dark:border-slate-500 rounded-md w-11/12 md:w-4/12 lg:w-3/12 text-teal-500 dark:text-slate-400 shadow-lg transition-colors duration-500">
                <div className="flex justify-center text-7xl py-3">
                    <RiSurveyFill />
                </div>
                <div className="text-center">
                    <p className="text-2xl">გამოკითხვები</p>
                    <button className="mt-6 py-1 px-5 rounded border border-teal-500 hover:bg-teal-500 hover:text-white dark:border-slate-400 dark:hover:bg-slate-400 transition-colors duration-300">დამატება</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
