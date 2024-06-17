import { useEffect, useState } from "react";
import "alk-sanet/css/alk-sanet.min.css";
import "/node_modules/bpg-arial/css/bpg-arial.min.css";
import MainHeader from "./Components/MainHeader";
import Login from "./Components/Login";

import AdminLayout from "./Components/Admin/AdminLayout";
import Loading from "./Components/Loading";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { create } from "zustand";

export const useExaminatorStore = create((set, get) => ({
    darkMode: false,
    setDarkMode: (mode) => {
        set({ darkMode: mode });
    }
}))

function App() {
    const { darkMode, setDarkMode } = useExaminatorStore();
    const [moding, setModing] = useState(false);

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
        const _darkMode = localStorage.getItem("darkMode");
        console.log(_darkMode);
        if (_darkMode === "true") setDarkMode(true);
        else setDarkMode(false);

        const scroll = document.querySelector("body");
        scroll.style.overflow = "hidden";
        setTimeout(() => {
            setLoadingAnim(false);
            scroll.style.overflow = "auto";
        }, 1500);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        const d = document.addEventListener('contextmenu', (e) => e.preventDefault());
        return () => document.removeEventListener('contextmenu', d);
    }, []);

    return (
        <div className={`bg-teal-300 dark:bg-slate-800 flex flex-col min-h-screen md:h-screen p-3 ${darkMode ? "dark" : "light"}`}>
            {isLoading && <Loading loadingAnim={loadingAnim} />}
            <MainHeader darkMode={darkMode} changeDarkMode={changeDarkMode} />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/admin" element={<AdminLayout />} />
            </Routes>
        </div>
    );
}

export default App;
