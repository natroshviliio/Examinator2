import axios from "axios";
import React, { useEffect, useState } from "react";
import { useExaminatorStore } from "../App";

const Login = () => {
    const { HTTP, setUserData } = useExaminatorStore();

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
        invited: false,
    });

    const handleChangeForm = e => {
        const _loginForm = { ...loginForm };
        _loginForm[e.target.name] = e.target.value;
        setLoginForm(_loginForm);
    }

    const handleChangeInvited = e => {
        const _loginForm = { ...loginForm };
        _loginForm[e.target.name] = e.target.checked;
        setLoginForm(_loginForm);
    }

    const login = async () => {
        if (loginForm.invited) {
            await axios.post(`${HTTP}/getready`, { ...loginForm })
                .then(res => {
                    if (res.status >= 200 && res.status <= 226) {
                        if (res.data.status) {
                            setUserData(res.data.userData);
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            await axios.post(`${HTTP}/login`, { ...loginForm })
                .then(res => {
                    if (res.status >= 200 && res.status <= 226) {
                        if (res.data.status) {
                            setUserData(res.data.userData);
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    return (
        <div className="w-[95%] md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 mx-auto my-[10%] rounded-md alk-sanet flex flex-col shadow-xl transition-colors duration-700">
            <div className="text-center text-2xl my-3"><b>ავტორიზაცია</b></div>
            <div className="mx-auto w-[70%] flex flex-col items-center mt-3">
                <input type="email" placeholder="ელფოსტა" className="border border-gray-300 p-2 w-full text-xl rounded-md outline-0 text-gray-600 text-center mb-4 dark:bg-slate-200" name="email" value={loginForm.email} onChange={handleChangeForm} onKeyDown={e => e.key === 'Enter' && login()} />
                <input type="password" placeholder="პაროლი" className="border border-gray-300 p-2 w-full text-xl rounded-md outline-0 text-gray-600 text-center mb-4 dark:bg-slate-200" name="password" value={loginForm.password} onChange={handleChangeForm} onKeyDown={e => e.key === 'Enter' && login()} />
                <label htmlFor={`examer`} className="relative inline-flex gap-3 items-center cursor-pointer mr-auto mb-3">
                    <input id={`examer`} type="checkbox" name="invited" value={loginForm.invited} onChange={handleChangeInvited} className="sr-only peer" />
                    <div className={`w-11 h-5 bg-white dark:bg-slate-300 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.1)] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500`}></div>
                    <span
                        className={`
                                  absolute w-4 h-4 top-[4px] left-[2px] peer-checked:left-[9px] rounded-full peer transition-all duration-500 peer-checked:translate-x-full
                                  flex items-center justify-center
                                  text-amber-500
                                  peer-checked:text-slate-800
                                  text-2xl
                                  bg-teal-400
                                  dark:bg-slate-500
                              `}>
                    </span>
                    <span className="text-teal-500 dark:text-slate-400">ტესტირებაზე მოწვეული</span>
                </label>
                <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-slate-950/[.8] text-white text-lg px-5 py-2 w-full rounded-md mb-4" onClick={login} >ავტორიზაცია</button>
            </div>
        </div>
    );
};

export default Login;
