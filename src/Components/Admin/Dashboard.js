import React, { useEffect, useState } from "react";

const Dashboard = ({menuItems, setSelectedMenuItem }) => {


    return (
        <div className="px-3 py-2 flex flex-col md:flex-row items-start items-center md:justify-start gap-3 w-full">
            {menuItems.map((item, i) => {
                return (
                    <div key={i} className="p-4 bg-teal-100/25 hover:bg-teal-100 dark:bg-slate-500/25 dark:hover:bg-slate-500/50 border border-teal-400 dark:border-slate-500 rounded-md w-11/12 md:w-4/12 lg:w-3/12 text-teal-500 dark:text-slate-400 shadow-lg transition-colors duration-500">
                        <div className="flex justify-center text-7xl py-3">
                            {item.icon}
                        </div>
                        <div className="text-center">
                            <p className="text-2xl">{item.itemName}</p>
                            <button className="mt-6 py-1 px-5 rounded border border-teal-500 hover:bg-teal-500 hover:text-white dark:border-slate-400 dark:hover:bg-slate-400 transition-colors duration-300" onClick={() => setSelectedMenuItem(item)}>დამატება</button>
                        </div>
                    </div>
                )
            })}
            {/* {subjectModal && <CreateSubject subjectModal={subjectModal} hideSubjectModal={hideSubjectModal} />} */}
        </div>
    );
};

export default Dashboard;
