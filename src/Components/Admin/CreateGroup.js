import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateGroup = ({ toggleGroupModal, setGroups, HTTP }) => {
    const [opacity, setOpacity] = useState(false);

    const [groupName, setGroupName] = useState('');
    const [usersInput, setUsersInput] = useState('');
    const [users, setUsers] = useState([]);

    const handleChangeGroupName = e => setGroupName(e.target.value);
    const handleChangeUsersInput = e => {
        const _value = e.target.value;
        setUsersInput(_value);

        const _u = _value.replace(/[ ]/gi, ' ').split(/[,| \n;]/gi);
        const _modified = _u.filter(x => {
            const _a = x.split('@');
            if(_a.length === 2) {
                if(_a[1].includes('.') && !_a[1].endsWith('.') && !_a[0].startsWith('.') && _a[1].length > 2) {
                    return true;
                }
            }
        }).map(x => x.replace(/[/|\\'"[\]`:><?{\}!#$%^&*()+=\~]/gi, ''));
        setUsers([...new Set(_modified)]);
    }

    const createGroup = async () => {
        await axios.post(`${HTTP}/creategroup`, { groupName, groupMembers: users })
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    setGroups(g => [...g, res.data]);
                    toggleGroupModal();
                    setGroupName('');
                }
            })
            .catch(console.error);
    }


    useEffect(() => {
        setTimeout(() => {
            setOpacity(true);
        }, 100);
    }, [])

    return (
        <div className={`absolute left-0 top-0 z-10 ${opacity ? 'opacity-1' : 'opacity-0'} transition duration-500`}>
            <div className="relative z-10 alk-sanet">
                <div className={`fixed inset-0 bg-gray-800/[.7]`} />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden sm:rounded-lg bg-white dark:bg-slate-600 text-left shadow-xl transition-all sm:my-8 w-screen h-screen sm:h-auto sm:w-full sm:max-w-2xl">
                            <div className="text-gray-600 dark:text-slate-200 dark:bg-slate-600 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                ჯგუფის შექმნა
                            </div>
                            <div className="p-3">
                                <div className="w-[85%] mx-auto flex flex-col gap-3">
                                <input type="text" className="w-full mx-auto rounded-md border-gray-300 dark:bg-slate-300 dark:text-gray-700 focus:ring-teal-400 focus:border-teal-400 dark:focus:ring-slate-300 dark:focus:border-slate-300" placeholder="ჯგუფის სახელი" value={groupName} onChange={handleChangeGroupName} />
                                <textarea className="w-full mx-auto bpg-arial rounded-md border-teal-300 focus:ring-teal-300 focus:border-teal-300 dark:border-slate-300 dark:focus:ring-slate-300 bg-white text-gray-600 dark:bg-slate-500 dark:text-gray-200 dark:placeholder:text-gray-200 min-h-[12rem] max-h-[32rem] overflow-v" name="question" placeholder="დაამატეთ მონაწილეები, მაგ johndavis@example.com, anotheruser@example.com" value={usersInput} onChange={handleChangeUsersInput}></textarea>
                                <div className="p-2 flex gap-3 flex-wrap bpg-arial max-h-[300px] overflow-y-auto overflow-v">
                                    {users.map((u, i) => {
                                        return (
                                            <span key={i} className="py-1 px-3 bg-teal-400 rounded-xl text-white">{u}</span>
                                        )
                                    })}
                                </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-600 px-4 py-3 justify-end gap-2 flex flex-col sm:flex-row sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-teal-400 hover:bg-teal-500 dark:bg-slate-400 dark:hover:bg-slate-500 px-3 py-2 text-md text-white shadow-sm sm:ml-3 sm:w-auto"
                                    onClick={createGroup}
                                >
                                    შექმნა
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-emerald-400 hover:bg-emerald-500 dark:bg-gray-400 dark:hover:bg-gray-500 px-3 py-2 text-md text-white shadow-sm sm:mt-0 sm:w-auto"
                                    onClick={toggleGroupModal}
                                    data-autofocus
                                >
                                    გაუქმება
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CreateGroup;
