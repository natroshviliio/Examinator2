import React, { useEffect, useState } from "react";

import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MainHeader = ({ darkMode, changeDarkMode }) => {
    const [currentUrl, setCurrentUrl] = useState("");
    const location = useLocation();

    useEffect(() => {
        setCurrentUrl(location.pathname);
    }, [location]);

    return (
        <nav className="w-full relative py-2 bg-white shadow-lg text-gray-600 dark:bg-slate-700 dark:text-slate-200 rounded-md alk-sanet transition-colors duration-700">
            <div className="container mx-auto">
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="flex lg:flex-row px-3 py-0 w-full">
                        <a href="javascript:;" className="flex items-center ml-2 text-lg">
                            Examinator
                        </a>
                        <button data-collapse-toggle="header-navbar" type="button" className="inline-flex items-center ml-auto mr-3 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="header-navbar" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <div className="hidden absolute bg-white dark:bg-slate-700 lg:static left-0 top-[95%] w-full lg:w-auto lg:flex p-2 lg:pl-11 shadow-xl lg:shadow-none rounded-b-lg transition-colors duration-700 ml-auto z-[99]" id="header-navbar">
                            <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4 lg:mr-5 text-gray-600 dark:text-slate-200">
                                <li>
                                    <Link to="/" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">
                                        მთავარი
                                    </Link>
                                </li>
                                {currentUrl === "/admin" && (
                                    <>
                                        <li>
                                            <Link to="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">
                                                თემატიკები
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">
                                                ტესტები
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">
                                                ჯგუფები
                                            </Link>
                                        </li>
                                    </>
                                )}
                                <li>
                                    <Link to="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">
                                        დაგვიკავშირდით
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">
                                        ადმინი
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex align-center w-fit mx-auto my-3 lg:my-0 lg:mx-0 lg:mr-3">
                                <label htmlFor="ch" className="relative inline-flex items-center cursor-pointer">
                                    <input id="ch" type="checkbox" checked={darkMode} className="sr-only peer" onChange={changeDarkMode} />
                                    <div
                                        className={`
                                    w-20 h-9 bg-white dark:bg-slate-300 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.1)] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500
                                `}></div>
                                    <span
                                        className={`
                                    absolute w-8 h-8  top-[2px] left-[2px] peer-checked:left-[14px] rounded-full peer transition-all duration-500 peer-checked:translate-x-full
                                    flex items-center justify-center
                                    text-amber-500
                                    peer-checked:text-slate-800
                                    text-2xl
                                `}>
                                        {darkMode ? <FaCloudMoon /> : <FaCloudSun />}
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-9 h-9 rounded-full object-cover" src="/img/profile.webp" alt="user photo" />
                            </button>

                            <div id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 right-[200px] rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div>იოანე ნატროშვილი</div>
                                    <div className="font-medium truncate">i.natroshvili@ssu.edu.ge</div>
                                </div>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            პროფილი
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            პარამეტრები
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            რამე სხვა
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-2">
                                    <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-400 dark:hover:text-red-300">
                                        გასვლა
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainHeader;
