import React, { useEffect } from "react";
import { MdTimer, MdTask } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosRefresh } from "react-icons/io";
import { GrCopy } from "react-icons/gr";

const AdminLayout = () => {

    return (
        <div className="py-2 pt-3 flex flex-1 gap-3 alk-sanet">
            <div className="text-gray-600 dark:text-slate-200 flex hidden xl:block xl:basis-1/5 transition-colors duration-700">
                <div className="p-3 bg-white dark:bg-slate-700 text-center text-lg rounded-md transition-colors duration-700">
                    <b className="text-gray-600 dark:text-slate-200">თემატიკები</b>
                </div>
                <div className="mt-3">
                    <div id="accordion-collapse" data-accordion="collapse" className="rounded-md bg-white dark:bg-slate-700 overflow-hidden transition-colors duration-700">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" className="flex overflow-hidden outline-none items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-600 gap-3 dark:bg-slate-700 transition-colors duration-700" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                <span>მათემატიკა</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div className="p-2 text-gray-600 dark:text-slate-200 dark:border-gray-700 transition-none">
                                <div className="p-3 border border-1 border-teal-300 dark:border-slate-500 rounded-md">
                                    <p className="pb-1 border-b border-teal-300 dark:border-slate-500">მათემატიკური ტესტი 1</p>
                                    <div className="text-sm mt-3 flex flex-col gap-1">
                                        <p className="flex items-center"><MdTask className="text-lg mb-1" /> კითხვების რაოდენობა: 50</p>
                                        <p className="flex items-center"><MdTimer className="text-lg mb-1" /> ჯამური დრო: 01:15:00</p>
                                        <p className="flex items-center">
                                            <RiLockPasswordFill className="text-lg mb-1" />
                                            მოწვევის კოდი: LzJmP2A53T4
                                            <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800"><GrCopy /></button>
                                            <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800"><IoIosRefresh /></button>
                                        </p>
                                    </div>
                                    <div className="mt-3 rounded-sm border border-teal-300 dark:border-slate-500 p-2 flex gap-2">
                                        <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">გააქტიურება</button>
                                        <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">რედაქტირება</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-700 dark:text-slate-200 flex flex-1 p-2 rounded-md transition-colors duration-700">

            </div>
        </div>
    )
};

export default AdminLayout;
