import React from "react";

import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

const MainHeader = ({ darkMode, changeDarkMode }) => {
    return (
        <nav className="w-full py-2 bg-white shadow-lg dark:bg-slate-700 dark:text-slate-200 rounded-md alk-sanet">
            <div className="">
                <div className="relative w-full flex flex-col lg:flex-row">
                    <div className="flex w-full justify-between lg:flex-row px-3 py-2">
                        <a href="https://pagedone.io/" className="flex items-center ml-2 text-lg">
                            <b>ტესტირების სისტემა</b>
                        </a>
                        <button data-collapse-toggle="navbar-nav-example" type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-nav-example" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden absolute bg-white dark:bg-slate-700 lg:static top-[100%] w-full lg:flex p-2 lg:pl-11 shadow-xl lg:shadow-none rounded-b-lg" id="navbar-nav-example">
                        <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4">
                            <li>
                                <a href="javascript:;"
                                    className="flex items-center justify-between text-lg lg:text-base font-medium hover:text-indigo-700 mb-2 lg:mr-6 md:mb-0 md:mr-3">Home</a>
                            </li>
                        </ul>
                        <div className='flex align-center w-fit mx-auto my-3 lg:my-0 lg:mx-0 lg:mr-3'>
                            <label htmlFor='ch' className="relative inline-flex items-center cursor-pointer">
                                <input id='ch' type="checkbox" checked={darkMode} className="sr-only peer" onChange={changeDarkMode} />
                                <div className={`
                                    w-20 h-9 bg-white dark:bg-slate-300 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.1)] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500
                                `}></div>
                                <span className={`
                                    absolute w-8 h-8  top-[2px] left-[2px] peer-checked:left-[14px] rounded-full peer transition-all duration-500 peer-checked:translate-x-full
                                    flex items-center justify-center
                                    text-amber-500
                                    peer-checked:text-slate-800
                                    text-2xl
                                `}>{darkMode ? <FaCloudMoon /> : <FaCloudSun />}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default MainHeader;
