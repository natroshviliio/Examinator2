import { Modal } from "flowbite-react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";

import React from "react";

const CreateSubject = ({ subjectModal, hideSubjectModal }) => {
    return (
        <Transition show={subjectModal}>
            <div className="relative z-10 alk-sanet" onClose={hideSubjectModal}>
                <div className="fixed inset-0 bg-gray-800/[.7] bg-opacity-75 transition-opacity" />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white dark:bg-slate-600 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                თემატიკის დამატება
                            </div>
                            <div className="bg-gray-50 dark:bg-slate-600 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    onClick={hideSubjectModal}
                                >
                                    Deactivate
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    onClick={hideSubjectModal}
                                    data-autofocus
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    )
};

export default CreateSubject;
