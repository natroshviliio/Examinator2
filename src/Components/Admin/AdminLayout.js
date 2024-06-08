import React from "react";

const AdminLayout = () => {
    return (
        <div className="py-2 pt-3 flex flex-1 gap-3 alk-sanet">
            <div className="text-gray-600 dark:text-slate-200 flex hidden xl:block xl:basis-1/5 transition-colors duration-700">
                <div className="p-3 bg-white dark:bg-slate-700 text-center text-lg rounded-md transition-colors duration-700">
                    <b className="text-gray-600 dark:text-slate-200">ჯგუფები</b>
                </div>
                <div className="mt-3">
                </div>
            </div>
            <div className="bg-white dark:bg-slate-700 dark:text-slate-200 flex flex-1 p-2 rounded-md transition-colors duration-700">

            </div>
        </div>
    )
};

export default AdminLayout;
