import React from "react";

import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

const MainHeader = ({ darkMode, changeDarkMode }) => {
    return (
        <header className='flex bg-white shadow-lg dark:bg-slate-700 dark:text-slate-200 rounded-md p-2 alk-sanet'>
            <div className='flex items-center ml-2 text-lg'><b>ტესტირების სისტემა</b></div>
            <div className='flex align-center w-fit ml-auto'>
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
        </header>
    )
};

export default MainHeader;
