import React, { useEffect, useState } from "react";
import { MdTimer, MdTask } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosRefresh } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";

import { GrCopy } from "react-icons/gr";
import { Accordion } from "flowbite-react";


import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader";


const AdminLayout = ({ darkMode, changeDarkMode }) => {

    return (
        <>
            <MainHeader darkMode={darkMode} changeDarkMode={changeDarkMode} />
            <div className="py-2 pt-3 px-3 flex flex-col flex-1 lg:flex-row gap-3 alk-sanet md:overflow-hidden">
                <div className="text-gray-600 dark:text-slate-200 hidden xl:flex xl:flex-col xl:basis-1/5 transition-colors duration-700 overflow-hidden overflow-y-auto overflow-v rounded flex-0">
                    <div className="p-3 flex flex-0 bg-white dark:bg-slate-700 text-center text-lg rounded-md transition-colors duration-700">
                        <b className="text-gray-600 dark:text-slate-200 sticky top-0">თემატიკები</b>
                    </div>
                    <div className="mt-3">
                        <Accordion collapseAll={true} className="rounded-md bg-white dark:bg-slate-700 overflow-hidden transition-colors duration-700 border-none">
                            <Accordion.Panel>
                                <Accordion.Title className="flex border-none overflow-hidden outline-none items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-600 hover:bg-slate-100 dark:hover:bg-slate-600 gap-3 dark:bg-slate-700 transition-colors duration-700">მათემატიკა</Accordion.Title>
                                <Accordion.Content className="bg-white dark:bg-slate-700 transition-colors duration-700 p-0">
                                    <div className="p-2 text-gray-600 dark:text-slate-200 dark:border-gray-700 transition-none">
                                        <div className="p-3 border border-1 border-teal-300 dark:border-slate-500 rounded-md">
                                            <p className="pb-1 border-b border-teal-300 dark:border-slate-500">მათემატიკური ტესტი 1</p>
                                            <div className="text-sm mt-3 flex flex-col gap-1">
                                                <p className="flex items-center">
                                                    <MdTask className="text-lg mb-1" /> კითხვების რაოდენობა: 50
                                                </p>
                                                <p className="flex items-center">
                                                    <MdTimer className="text-lg mb-1" /> ჯამური დრო: 01:15:00
                                                </p>
                                                <p className="flex items-center">
                                                    <RiLockPasswordFill className="text-lg mb-1" />
                                                    მოწვევის კოდი: LzJmP2A53T4
                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                        <GrCopy />
                                                    </button>
                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                        <IoIosRefresh />
                                                    </button>
                                                </p>
                                                <p className="flex items-center">
                                                    <FaUserGroup className="text-lg mb-1" /> ჯგუფი: ჯგუფი 87
                                                </p>
                                            </div>
                                            <div className="mt-3 rounded-sm border border-teal-300 dark:border-slate-500 p-2 flex gap-2">
                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">გააქტიურება</button>
                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">რედაქტირება</button>
                                            </div>
                                        </div>
                                        <div className="p-3 border border-1 border-teal-300 dark:border-slate-500 rounded-md mt-3">
                                            <p className="pb-1 border-b border-teal-300 dark:border-slate-500">მათემატიკური ტესტი 2</p>
                                            <div className="text-sm mt-3 flex flex-col gap-1">
                                                <p className="flex items-center">
                                                    <MdTask className="text-lg mb-1" /> კითხვების რაოდენობა: 30
                                                </p>
                                                <p className="flex items-center">
                                                    <MdTimer className="text-lg mb-1" /> ჯამური დრო: 00:45:00
                                                </p>
                                                <p className="flex items-center">
                                                    <RiLockPasswordFill className="text-lg mb-1" />
                                                    მოწვევის კოდი: AZY3C34LPT1
                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                        <GrCopy />
                                                    </button>
                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                        <IoIosRefresh />
                                                    </button>
                                                </p>
                                                <p className="flex items-center">
                                                    <FaUserGroup className="text-lg mb-1" /> ჯგუფი: ჯგუფი 87
                                                </p>
                                            </div>
                                            <div className="mt-3 rounded-sm border border-teal-300 dark:border-slate-500 p-2 flex gap-2">
                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">გააქტიურება</button>
                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">რედაქტირება</button>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                        <Accordion collapseAll={true} className="rounded-md bg-white dark:bg-slate-700 overflow-hidden transition-colors duration-700 border-none mt-3">
                            <Accordion.Panel>
                                <Accordion.Title className="flex border-none overflow-hidden outline-none items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-600 hover:bg-slate-100 dark:hover:bg-slate-600 gap-3 dark:bg-slate-700 transition-colors duration-700">პროგრამირება</Accordion.Title>
                                <Accordion.Content className="bg-white dark:bg-slate-700 transition-colors duration-700 p-0">
                                    <div className="p-2 text-gray-600 dark:text-slate-200 dark:border-gray-700 transition-none">
                                        <div className="p-3 border border-1 border-teal-300 dark:border-slate-500 rounded-md">
                                            <p className="pb-1 border-b border-teal-300 dark:border-slate-500">ჯავასკრიპტის ტესტი 1</p>
                                            <div className="text-sm mt-3 flex flex-col gap-1">
                                                <p className="flex items-center">
                                                    <MdTask className="text-lg mb-1" /> კითხვების რაოდენობა: 50
                                                </p>
                                                <p className="flex items-center">
                                                    <MdTimer className="text-lg mb-1" /> ჯამური დრო: 01:15:00
                                                </p>
                                                <p className="flex items-center">
                                                    <RiLockPasswordFill className="text-lg mb-1" />
                                                    მოწვევის კოდი: LzJmP2A53T4
                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                        <GrCopy />
                                                    </button>
                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                        <IoIosRefresh />
                                                    </button>
                                                </p>
                                                <p className="flex items-center">
                                                    <FaUserGroup className="text-lg mb-1" /> ჯგუფი: ჯგუფი 85
                                                </p>
                                            </div>
                                            <div className="mt-3 rounded-sm border border-teal-300 dark:border-slate-500 p-2 flex gap-2">
                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">გააქტიურება</button>
                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">რედაქტირება</button>
                                            </div>
                                        </div>
                                        <div className="p-3 border border-1 border-teal-300 dark:border-slate-500 rounded-md mt-3">
                                            <p className="pb-1 border-b border-teal-300 dark:border-slate-500">პითონის ტესტი 1</p>
                                            <div className="text-sm mt-3 flex flex-col gap-1">
                                                <p className="flex items-center">
                                                    <MdTask className="text-lg mb-1" /> კითხვების რაოდენობა: 30
                                                </p>
                                                <p className="flex items-center">
                                                    <MdTimer className="text-lg mb-1" /> ჯამური დრო: 00:45:00
                                                </p>
                                                <p className="flex items-center">
                                                    <RiLockPasswordFill className="text-lg mb-1" />
                                                    მოწვევის კოდი: AZY3C34LPT1
                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                        <GrCopy />
                                                    </button>
                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                        <IoIosRefresh />
                                                    </button>
                                                </p>
                                                <p className="flex items-center">
                                                    <FaUserGroup className="text-lg mb-1" /> ჯგუფი: ჯგუფი 84
                                                </p>
                                            </div>
                                            <div className="mt-3 rounded-sm border border-teal-300 dark:border-slate-500 p-2 flex gap-2">
                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">გააქტიურება</button>
                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">რედაქტირება</button>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;
