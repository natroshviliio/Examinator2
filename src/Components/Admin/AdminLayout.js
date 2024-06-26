import React, { useEffect, useState } from "react";
import { MdTimer, MdTask } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosRefresh } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";

import { GrCopy } from "react-icons/gr";
import { Accordion } from "flowbite-react";


import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader";
import axios from "axios";
import { useExaminatorStore } from "../../App";


const AdminLayout = ({ darkMode, changeDarkMode }) => {
    const { HTTP } = useExaminatorStore();

    const [testsWithSubjects, setTestsWithSubjects] = useState([]);
    const [groups, setGroups] = useState([]);
    const [groupsDropdown, setGroupsDropdown] = useState([]);

    const toggleGroupsDropdown = (testId) => {
        if (groupsDropdown.includes(testId)) setGroupsDropdown(g => g.filter(x => x !== testId));
        else setGroupsDropdown(g => [...g, testId]);
    }

    const selectGroupForTest = (i, j, grp) => {
        const _testsWithSubjects = [...testsWithSubjects];
        _testsWithSubjects[i].tests[j]["group"] = grp;

        toggleGroupsDropdown(_testsWithSubjects[i].tests[j].testId);
        setTestsWithSubjects(_testsWithSubjects);
    }

    const getTestsSortedWithSubjects = async () => {
        await axios(`${HTTP}/testswithsubjects`)
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    setTestsWithSubjects(res.data);
                }
            })
            .catch(console.error);
    }

    const getMembersGroups = async () => {
        await axios.get(`${HTTP}/mgroups`)
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    setGroups(res.data);
                }
            })
            .catch(console.error);
    }

    const generateTestpassword = async (i, j, testId) => {
        await axios.post(`${HTTP}/gentestpassword`, { testId })
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    const _testsWithSubjects = [...testsWithSubjects];
                    _testsWithSubjects[i].tests[j].password = res.data;

                    setTestsWithSubjects(_testsWithSubjects);
                }
            })
            .catch(console.error);
    }

    const enableTest = async (i, j, test) => {
        await axios.post(`${HTTP}/enabletest`, { testId: test.testId, groupId: test.group?.groupId, enabledTestsId: test.isTestEnabled?.enabledTestsId })
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    const _testsWithSubjects = [...testsWithSubjects];
                    if (test.isTestEnabled) {
                        _testsWithSubjects[i].tests[j]["isTestEnabled"] = null;
                    } else {
                        _testsWithSubjects[i].tests[j]["isTestEnabled"] = {
                            ..._testsWithSubjects[i].tests[j]["group"],
                            testId: _testsWithSubjects[i].tests[j].testId,
                            userId: _testsWithSubjects[i].tests[j].userId,
                            enabledTestsId: res.data.insertId
                        }
                    }
                    setTestsWithSubjects(_testsWithSubjects);
                }
            })
            .catch(console.error);
    }

    useEffect(() => {
        getTestsSortedWithSubjects();
        getMembersGroups();
    }, [])

    return (
        <>
            <MainHeader darkMode={darkMode} changeDarkMode={changeDarkMode} />
            <div className="py-2 pt-3 px-3 flex flex-col flex-1 lg:flex-row gap-3 alk-sanet md:overflow-hidden">
                <div className="text-gray-600 dark:text-slate-200 hidden xl:flex xl:flex-col xl:basis-1/5 transition-colors duration-700 overflow-hidden overflow-y-auto overflow-v rounded flex-0">
                    <div className="p-3 flex flex-0 bg-white dark:bg-slate-700 text-center text-lg rounded-md transition-colors duration-700">
                        <b className="text-gray-600 dark:text-slate-200 sticky top-0">თემატიკები</b>
                    </div>
                    <div className="mt-3">
                        {testsWithSubjects.map((s, i) => {
                            return (
                                <Accordion key={i} collapseAll={true} className="rounded-md bg-white dark:bg-slate-700 overflow-hidden transition-colors duration-700 border-none mb-2">
                                    <Accordion.Panel>
                                        <Accordion.Title className="flex border-none overflow-hidden outline-none items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-600 hover:bg-slate-100 dark:hover:bg-slate-600 gap-3 dark:bg-slate-700 transition-colors duration-700">{s.subjectName}</Accordion.Title>
                                        <Accordion.Content className="bg-white dark:bg-slate-700 transition-colors duration-700 p-0">
                                            {s.tests?.map((t, j) => {
                                                const testTime = t.testTime / 1000;
                                                const h = Math.floor(testTime / 60 / 60).toString().padStart(2, '0');
                                                const m = Math.floor((testTime / 60) % 60).toString().padStart(2, '0');
                                                const s = Math.floor(testTime % 60).toString().padStart(2, '0');
                                                return (
                                                    <div key={j} className="p-2 text-gray-600 dark:text-slate-200 dark:border-gray-700 transition-none">
                                                        <div className="p-3 border border-1 border-teal-300 dark:border-slate-500 rounded-md">
                                                            <p className="pb-1 border-b border-teal-300 dark:border-slate-500">{t.testName}</p>
                                                            <div className="text-sm mt-3 flex flex-col gap-1">
                                                                <p className="flex items-center">
                                                                    <MdTask className="text-lg mb-1" /> კითხვების რაოდენობა: {t.questionsCount}
                                                                </p>
                                                                <p className="flex items-center">
                                                                    <MdTimer className="text-lg mb-1" /> ჯამური დრო: {h}:{m}:{s}
                                                                </p>
                                                                <span className="flex items-center">
                                                                    <RiLockPasswordFill className="text-lg mb-1" />
                                                                    მოწვევის კოდი: {t.password || 'N/A'}
                                                                    <button className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">
                                                                        <GrCopy />
                                                                    </button>
                                                                    <button disabled={t.isTestEnabled} className="ms-2 text-sm p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none mb-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800" onClick={() => generateTestpassword(i, j, t.testId)}>
                                                                        <IoIosRefresh />
                                                                    </button>
                                                                </span>
                                                                <div className="flex items-center">
                                                                    <FaUserGroup className="text-lg mb-1" />
                                                                    <span>ჯგუფი:</span>
                                                                    <div className="relative inline-block text-left w-fit">
                                                                        <div>
                                                                            <button type="button" disabled={t.isTestEnabled} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-slate-500 dark:hover:bg-slate-400 dark:hover:ring-slate-400 dark:ring-0 dark:text-gray-100 ml-2 py-0 px-0 text-sm text-gray-600 shadow-sm border-0 shadow-0 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => toggleGroupsDropdown(t.testId)}>
                                                                                {t.group ? t.group.groupName : 'აირჩიეთ ჯგუფი'}
                                                                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                        {groupsDropdown.includes(t.testId) && (
                                                                            <div className="absolute left-[0] z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[350px] overflow-y-auto overflow-v" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                                                                <div className="py-1" role="none">
                                                                                    {groups.map((g, k) => {
                                                                                        return (
                                                                                            <button key={k} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full hover:bg-gray-200 dark:hover:bg-slate-700" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={() => selectGroupForTest(i, j, g)}>{g.groupName}</button>
                                                                                        )
                                                                                    })}
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mt-3 rounded-sm border border-teal-300 dark:border-slate-500 p-2 flex gap-2">
                                                                <button className={`text-md w-1/2 py-1 px-2 rounded ${t.isTestEnabled ? 'bg-red-400 hover:bg-red-500 active:bg-red-600' : 'bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600'} outline-none dark:hover:bg-slate-600 dark:active:bg-slate-800`} onClick={() => enableTest(i, j, t)}>{t.isTestEnabled ? 'დასრულება' : 'გააქტიურება'}</button>
                                                                <button className="text-md w-1/2 py-1 px-2 rounded bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 outline-none dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-800">რედაქტირება</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                </Accordion>
                            )
                        })}
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;
