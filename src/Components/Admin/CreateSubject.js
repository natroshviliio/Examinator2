import { Modal } from "flowbite-react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";

import React from "react";

const CreateSubject = ({ subjectModal, hideSubjectModal }) => {
    return (
        <div className="absolute">
            <div className="relative z-10 alk-sanet">
                <div className="fixed inset-0 bg-gray-800/[.7] bg-opacity-75 transition-opacity" />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden sm:rounded-lg bg-white dark:bg-slate-600 text-left shadow-xl transition-all sm:my-8 w-screen h-screen sm:h-auto sm:w-full sm:max-w-lg">
                            <div className="bg-white dark:bg-slate-600 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                თემატიკის დამატება
                            </div>
                            <div className="p-3 flex">
                                <input type="text" className="w-[85%] mx-auto rounded-md border-gray-300 dark:bg-slate-300 dark:text-gray-700" placeholder="თემატიკის სახელი" />
                            </div>
                            <div className="bg-white dark:bg-slate-600 px-4 py-3 justify-end gap-2 flex sm:px-6">
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
