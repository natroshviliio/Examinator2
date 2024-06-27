import { useEffect, useState } from "react";
import "alk-sanet/css/alk-sanet.min.css";
import "/node_modules/bpg-arial/css/bpg-arial.min.css";
import Login from "./Components/Login";

import AdminLayout from "./Components/Admin/AdminLayout";
import Loading from "./Components/Loading";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { create } from "zustand";
import axios from "axios";
import Dashboard from "./Components/Admin/Dashboard";
import DefaultLayout from "./Components/DefaultLayout";
import ExamLayout from "./Components/Exam/ExamLayout";

export const useExaminatorStore = create((set, get) => ({
    HTTP: process.env.REACT_APP_HTTP,
    WS: process.env.REACT_APP_WS,
    ROLES: {
        ADMINISTRATOR: 0x0
    },
    userData: null,
    setUserData: data => set({ userData: data }),
    darkMode: false,
    setDarkMode: (mode) => {
        set({ darkMode: mode });
    }
}))

function App() {
    axios.defaults.withCredentials = true;

    const { darkMode, setDarkMode, userData, setUserData, ROLES, HTTP } = useExaminatorStore();
    const [moding, setModing] = useState(false);

    const getUserData = async () => {
        await axios.get(`${HTTP}/checkuser`)
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    if (!userData) setUserData(res.data[0]);
                }
            })
            .catch(console.error);
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadingAnim, setLoadingAnim] = useState(true);

    const changeDarkMode = (e) => {
        if (!moding) {
            setModing(true);
            setDarkMode(e.target.checked);
            localStorage.setItem("darkMode", e.target.checked);
            setTimeout(() => {
                setModing(false);
            }, 500);
        }
    };

    useEffect(() => {
        getUserData();
        const _darkMode = localStorage.getItem("darkMode");
        if (_darkMode === "true") setDarkMode(true);
        else setDarkMode(false);

        const scroll = document.querySelector("body");
        scroll.style.overflow = "hidden";
        setTimeout(() => {
            setLoadingAnim(false);
            scroll.style.overflow = "auto";
        }, 500);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        const d = document.addEventListener('contextmenu', (e) => e.preventDefault());
        return () => document.removeEventListener('contextmenu', d);
    }, []);

    return (
        <div className={`bg-teal-300 dark:bg-slate-800 flex flex-col min-h-screen md:h-screen ${darkMode ? "dark" : "light"}`}>
            {isLoading && <Loading loadingAnim={loadingAnim} />}
            <Routes>
                {!userData ? (
                    <Route element={<DefaultLayout darkMode={darkMode} changeDarkMode={changeDarkMode} />}>
                        <Route exact path="/" element={<Login />} />
                    </Route>
                ) : (
                    userData.userRole === ROLES.ADMINISTRATOR && <Route element={<AdminLayout darkMode={darkMode} changeDarkMode={changeDarkMode} />} >
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                    ||
                    userData.userRole === 9 && <Route element={<ExamLayout />} >
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                )}
            </Routes>
        </div>
    );
}

export default App;
