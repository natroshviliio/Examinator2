import React from "react";

const Login = () => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 mx-auto my-[10%] rounded-md alk-sanet flex flex-col shadow-xl">
            <div className="text-center text-2xl my-3"><b>ავტორიზაცია</b></div>
            <div className="mx-auto w-[70%] flex flex-col items-center mt-3">
                <input type="text" placeholder="სახელი" className="border p-2 w-full text-xl rounded-md outline-0 text-gray-600 text-center mb-4 dark:bg-slate-200" />
                <input type="text" placeholder="პაროლი" className="border p-2 w-full text-xl rounded-md outline-0 text-gray-600 text-center mb-4 dark:bg-slate-200" />
                <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-slate-950/[.8] text-white text-lg px-5 py-2 w-full rounded-md mb-4">ავტორიზაცია</button>
            </div>
        </div>
    );
};

export default Login;
