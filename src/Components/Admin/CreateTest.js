import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const CreateTest = () => {
    return (
        <div className="p-3">
            <div className="relative p-2 pt-3 border border-gray-300 rounded-md flex gap-3">
                <div className="absolute top-[-8px] left-[8px] text-xs bg-white">საერთო პარამეტრები</div>
                <div className="relative w-2/12 group">
                    <input type="text" className="py-1 px-2 rounded-s border-gray-300 border-e-0 w-4/12 focus:ring-0 focus:border-gray-300 text-center" placeholder="00" />
                    <input type="text" className="py-1 px-2 border-gray-300 w-4/12 focus:ring-0 focus:border-gray-300 text-center" placeholder="00" />
                    <input type="text" className="py-1 px-2 rounded-e border-gray-300 border-s-0 w-4/12 focus:ring-0 focus:border-gray-300 text-center" placeholder="00" />
                    <div className="bg-gray-800 text-white absolute bottom-[115%] left-[50%] translate-x-[-50%] hidden group-hover:block px-3 py-1 rounded-md text-sm">
                        <p>ტესტის დრო</p>
                        <RiArrowDownSFill className="absolute top-[68%] text-gray-800 w-5 h-5 left-[50%] translate-x-[-50%]" />
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="ch1" className="relative inline-flex items-center cursor-pointer">
                        <input id="ch1" type="checkbox" className="sr-only peer" />
                        <div
                            className={`w-11 h-5 bg-white dark:bg-slate-300 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.1)] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500`}></div>
                        <span
                            className={`
                                    absolute w-4 h-4  top-[2px] left-[2px] peer-checked:left-[9px] rounded-full peer transition-all duration-500 peer-checked:translate-x-full
                                    flex items-center justify-center
                                    text-amber-500
                                    peer-checked:text-slate-800
                                    text-2xl
                                    bg-teal-400
                                `}>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default CreateTest;
