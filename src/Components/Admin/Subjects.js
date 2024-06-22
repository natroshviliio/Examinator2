import React, { useEffect, useState } from "react";

import { MdEdit } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import { RiAddLargeFill } from "react-icons/ri";
import { useExaminatorStore } from "../../App";
import axios from "axios";
import CreateSubject from "./CreateSubject";

const Subjects = () => {
    const { HTTP } = useExaminatorStore();

    const [subjects, setSubjects] = useState([]);
    const [subjectModal, setSubjectModal] = useState(false);

    const toggleSubjectModal = () => setSubjectModal(!subjectModal);

    const getSubjects = async () => {
        await axios.get(`${HTTP}/subjects`)
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    setSubjects(res.data);
                }
            })
            .catch(console.error);

    }

    useEffect(() => {
        getSubjects();
    }, [])

    return (
        <div className="p-3 flex flex-col h-full overflow-hidden">
            <div className="p-2 flex flex-col lg:flex-row flex-wrap gap-4 border border-teal-300 rounded-md alk-sanet lg:justify-center items-start content-start h-full overflow-y-auto overflow-v">
                <button className="w-full lg:w-auto group py-2 px-5 text-teal-600 dark:text-slate-300 border border-teal-300 bg-teal-300 hover:bg-teal-400 dark:border-slate-500 dark:bg-slate-500 dark:hover:bg-slate-600 rounded-lg transition-all duration-300 flex items-center" onClick={toggleSubjectModal}>
                    <span className="flex items-center gap-3">თემატიკის დამატება <RiAddLargeFill /></span>
                </button>
                {subjects.map((s, i) => {
                    return (
                        <button key={i} className="w-full lg:w-auto group py-2 px-5 text-teal-500 dark:text-slate-300 border border-teal-300 hover:bg-teal-300 hover:text-white dark:border-slate-500 dark:hover:bg-slate-500 rounded-lg transition-all duration-300 flex items-center">
                            <span>{s.subjectName}</span>
                            <span className="opacity-0 bg-amber-400 hover:bg-amber-500 p-1 rounded-full -ml-5 group-hover:ml-4 group-hover:opacity-100 transition-all duration-300"><MdEdit className="text-white" /></span>
                            <span className="opacity-0 bg-red-500 hover:bg-red-600 p-1 rounded-full -ml-5 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300"><BiSolidHide className="text-white" /></span>
                        </button>
                    )
                })}
            </div>
            {subjectModal && <CreateSubject toggleSubjectModal={toggleSubjectModal} setSubjects={setSubjects} HTTP={HTTP} />}
        </div>
    )
};

export default Subjects;
