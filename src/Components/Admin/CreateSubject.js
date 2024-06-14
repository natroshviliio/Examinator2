import React, { useEffect, useState } from "react";

const CreateSubject = ({ subjectModal, hideSubjectModal }) => {
    const [opacity, setOpacity] = useState(false);

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
                        <div className="relative transform overflow-hidden sm:rounded-lg bg-white dark:bg-slate-600 text-left shadow-xl transition-all sm:my-8 w-screen h-screen sm:h-auto sm:w-full sm:max-w-lg">
                            <div className="text-gray-600 dark:text-slate-200 dark:bg-slate-600 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                თემატიკის დამატება
                            </div>
                            <div className="p-3 flex">
                                <input type="text" className="w-[85%] mx-auto rounded-md border-gray-300 dark:bg-slate-300 dark:text-gray-700" placeholder="თემატიკის სახელი" />
                            </div>
                            <div className="bg-white dark:bg-slate-600 px-4 py-3 justify-end gap-2 flex flex-col sm:flex-row sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-teal-400 hover:bg-teal-500 dark:bg-slate-400 dark:hover:bg-slate-500 px-3 py-2 text-md text-white shadow-sm sm:ml-3 sm:w-auto"
                                    onClick={hideSubjectModal}
                                >
                                    დამატება
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-emerald-400 hover:bg-emerald-500 dark:bg-gray-400 dark:hover:bg-gray-500 px-3 py-2 text-md text-white shadow-sm sm:mt-0 sm:w-auto"
                                    onClick={hideSubjectModal}
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

export default CreateSubject;
