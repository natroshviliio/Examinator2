import React, { useEffect, useState } from "react";
import CreateSubject from "./CreateSubject";
import CreateTest from "./CreateTest";

import { FaUserGroup } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
import { IoBookSharp, IoChevronBack } from "react-icons/io5";
import { RiSurveyFill } from "react-icons/ri";
import Subjects from "./Subjects";
import Groups from "./Groups";

const Dashboard = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [menuItems, setMenuItems] = useState([
        {
            itemName: 'თემატიკები',
            actionType: 'modal',
            icon: <IoBookSharp />,
            component: <Subjects />
        },
        {
            itemName: 'ტესტები',
            actionType: 'page',
            icon: <MdTask />,
            component: <CreateTest />
        },
        {
            itemName: 'ჯგუფები',
            actionType: 'page',
            icon: <FaUserGroup />,
            component: <Groups />
        },
        {
            itemName: 'გამოკითხვები',
            actionType: 'page',
            icon: <RiSurveyFill />
        }
    ])

    return (
        <div className="bg-white dark:bg-slate-700 dark:text-slate-200 flex flex-col xl:basis-1/5 flex-1 p-2 rounded-md transition-colors duration-700 overflow-hidden">
            <div className="px-3 py-2 flex flex-0">
                <p className="text-3xl text-gray-600 text-center md:text-start dark:text-slate-400">
                    {selectedMenuItem ? (
                        <span className="flex items-center gap-3">
                            <button className="bg-teal-300 hover:bg-teal-400 dark:bg-slate-500 dark:hover:bg-slate-600 rounded-full p-1 px-2 pr-4 text-white flex items-center" onClick={() => setSelectedMenuItem(null)}><IoChevronBack /><span>{selectedMenuItem.itemName}</span></button>
                        </span>
                    ) : (
                        'მენიუ'
                    )}
                </p>
            </div>
            {!selectedMenuItem ? (
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
            ) : (
                selectedMenuItem?.component
            )}
        </div>

    );
};

export default Dashboard;
