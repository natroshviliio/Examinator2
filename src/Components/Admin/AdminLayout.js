import React, { useEffect } from "react";

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
                                    <p>მათემატიკური ტესტი 1</p>
                                    <div>

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
