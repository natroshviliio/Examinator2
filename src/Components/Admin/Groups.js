import React, { useEffect, useState } from "react";

import { MdEdit } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import { RiAddLargeFill } from "react-icons/ri";
import CreateGroup from "./CreateGroup";

import { useExaminatorStore } from "../../App";
import axios from "axios";

const Groups = () => {
    const { HTTP } = useExaminatorStore();

    const [groups, setGroups] = useState([]);
    const [groupModal, setGroupModal] = useState(false);

    const toggleGroupModal = () => setGroupModal(!groupModal);

    const getMembersGroups = async () => {
        await axios.get(`${HTTP}/mgroups`)
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    setGroups(res.data);
                }
            })
            .catch(console.error);
    }

    useEffect(() => {
        getMembersGroups();
    }, [])

    return (
        <div className="p-3 flex flex-col h-full overflow-hidden">
            <div className="p-2 flex flex-col gap-4 border border-teal-300 rounded-md alk-sanet h-full overflow-y-auto overflow-v">
                <div>
                    <button className="w-full lg:w-auto group py-2 px-5 text-teal-600 dark:text-slate-300 border border-teal-300 bg-teal-300 hover:bg-teal-400 dark:border-slate-500 dark:bg-slate-500 dark:hover:bg-slate-600 rounded-lg transition-all duration-300 flex items-center" onClick={toggleGroupModal}>
                        <span className="flex items-center gap-3">ჯგუფის შექმნა <RiAddLargeFill /></span>
                    </button>
                </div>
                {groups.map((s, i) => {
                    return (
                        <div className="flex flex-col w-full ">
                            <button key={i} className="relative w-full overflow-hidden lg:w-auto group py-2 px-5 text-teal-500 dark:text-slate-300 border border-teal-300 hover:bg-teal-300 hover:text-white dark:border-slate-500 dark:hover:bg-slate-500 rounded-lg transition-all duration-300 flex items-center">
                                <span>{s.groupName}</span>
                                <span className="absolute right-[-40px] opacity-0 bg-amber-400 hover:bg-amber-500 p-1 rounded-full group-hover: group-hover:opacity-100 transition-all duration-300"><MdEdit className="text-white" /></span>
                                <span className="absolute right-[-40px] opacity-0 bg-red-500 hover:bg-red-600 p-1 rounded-full group-hover: group-hover:opacity-100 transition-all duration-300"><BiSolidHide className="text-white" /></span>
                            </button>
                        </div>
                    )
                })}
            </div>
            {groupModal && <CreateGroup toggleGroupModal={toggleGroupModal} setGroups={setGroups} HTTP={HTTP} />}
        </div>
    )
};

export default Groups;
