import axios from "axios";
import React, { useEffect, useState } from "react";
import { useExaminatorStore } from "../App";

const Login = () => {
    const { HTTP, userData, setUserData } = useExaminatorStore();

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const handleChangeForm = e => {
        const _loginForm = { ...loginForm };
        _loginForm[e.target.name] = e.target.value;
        setLoginForm(_loginForm);
    }

    const getUserData = async () => {
        await axios.get(`${HTTP}/checkuser`)
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    setUserData(res.data);
                }
            })
            .catch(console.error);
    }

    const login = async () => {
        await axios.post(`${HTTP}/login`, { ...loginForm })
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    if (res.data.status) {
                        setUserData(res.data.userData);
                    } else {
                        setUserData({ userRole: 0 })
                    }
                }
            })
            .catch(err => {
                console.log(err);
                setUserData({ userRole: 0 })
            });
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 mx-auto my-[10%] rounded-md alk-sanet flex flex-col shadow-xl transition-colors duration-700">
            <div className="text-center text-2xl my-3"><b>ავტორიზაცია</b></div>
            <div className="mx-auto w-[70%] flex flex-col items-center mt-3">
                <input type="email" placeholder="ელფოსტა" className="border border-gray-300 p-2 w-full text-xl rounded-md outline-0 text-gray-600 text-center mb-4 dark:bg-slate-200" name="email" value={loginForm.email} onChange={handleChangeForm} onKeyDown={e => e.key === 'Enter' && login()} />
                <input type="password" placeholder="პაროლი" className="border border-gray-300 p-2 w-full text-xl rounded-md outline-0 text-gray-600 text-center mb-4 dark:bg-slate-200" name="password" value={loginForm.password} onChange={handleChangeForm} onKeyDown={e => e.key === 'Enter' && login()} />
                <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-slate-950/[.8] text-white text-lg px-5 py-2 w-full rounded-md mb-4" onClick={login} >ავტორიზაცია</button>
            </div>
        </div>
    );
};

export default Login;
