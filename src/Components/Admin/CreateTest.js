import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const CreateTest = () => {

    return (
        <div className="p-3 flex flex-col flex-1">
            <div className="relative p-2 pt-3 border border-gray-300 dark:border-slate-400 rounded-md flex flex-col lg:flex-row gap-3 flex-0">
                <div className="absolute top-[-8px] left-[8px] text-xs bg-white dark:bg-slate-700 transition-colors duration-700">
                    <span className="text-gray-600 dark:text-slate-200">საერთო პარამეტრები</span>
                </div>
                <div className="relative w-full lg:w-2/12 group">
                    <input type="text" className="py-1 px-2 rounded-s border-gray-300 border-e-0 w-4/12 focus:ring-0 focus:border-gray-300 text-center dark:bg-slate-400 dark:text-slate-700 placeholder:dark:text-slate-200 dark:border-slate-300" placeholder="00" />
                    <input type="text" className="py-1 px-2 border-gray-300 w-4/12 focus:ring-0 focus:border-gray-300 text-center dark:bg-slate-400 dark:text-slate-700 placeholder:dark:text-slate-200 dark:border-slate-300" placeholder="00" />
                    <input type="text" className="py-1 px-2 rounded-e border-gray-300 border-s-0 w-4/12 focus:ring-0 focus:border-gray-300 text-center dark:bg-slate-400 dark:text-slate-700 placeholder:dark:text-slate-200 dark:border-slate-300" placeholder="00" />
                    <div className="bg-gray-800 text-white absolute bottom-[115%] left-[50%] translate-x-[-50%] hidden group-hover:block px-3 py-1 rounded-md text-sm">
                        <p>ტესტის დრო</p>
                        <RiArrowDownSFill className="absolute top-[68%] text-gray-800 w-5 h-5 left-[50%] translate-x-[-50%]" />
                    </div>
                </div>
                <div className="flex items-center">
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
                </div>
                <div className="flex items-center lg:ml-auto">
                    <button className="bg-teal-300 dark:bg-slate-400 text-gray-600 dark:text-white px-3 py-1 rounded-md hover:bg-teal-400 dark:hover:bg-slate-500">დასრულება</button>
                </div>
            </div>
            <div className="p-2 mt-3 border border-gray-300 dark:border-slate-400 rounded-md w-full flex flex-1">
                <div className="grid w-full max-w-full">
                    <Swiper navigation={true} slidesPerView={1} pagination={{ dinamycBullets: true }} modules={[Navigation, Pagination]} className="swiper bg-gray-100 dark:bg-slate-600/[.3] rounded-lg">
                        <SwiperSlide className="">
                            <div className="p-2">
                                <div className="bg-teal-200 s dark:bg-slate-500 rounded-full p-3 shadow-[2px_2px_5px_rgba(0,0,0,0.3)]">
                                    <span className="text-gray-700 dark:text-slate-200">შეკითხვა 1</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <div className="p-2">
                                <div className="bg-teal-200 dark:bg-slate-500 rounded-full p-3 shadow-[2px_2px_5px_rgba(0,0,0,0.3)]">
                                    <span className="text-gray-700 dark:text-slate-200">შეკითხვა 2</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <div className="swiper-button-next"></div> */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CreateTest;
