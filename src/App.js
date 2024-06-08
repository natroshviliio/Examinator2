import { useEffect, useState } from 'react';
import './App.css';
import 'alk-sanet/css/alk-sanet.min.css';
import MainHeader from './Components/MainHeader';
import Login from './Components/Login';

import { initFlowbite } from 'flowbite';
import AdminLayout from './Components/Admin/AdminLayout';
import Loading from './Components/Loading';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [moding, setModing] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadingAnim, setLoadingAnim] = useState(true);


  const changeDarkMode = e => {
    if (!moding) {
      setModing(true);
      setDarkMode(e.target.checked);
      localStorage.setItem('darkMode', e.target.checked);
      setTimeout(() => {
        setModing(false);
      }, 500);
    }
  }

  useEffect(() => {
    initFlowbite();
    const _darkMode = localStorage.getItem('darkMode');
    if (_darkMode === "false") setDarkMode(false);
    else setDarkMode(true);

    setTimeout(() => {
      setLoadingAnim(false);
    }, 1500);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <div className={`bg-teal-300 dark:bg-slate-800 flex flex-col h-screen p-3 ${darkMode ? 'dark' : 'light'}`}>
      {isLoading && <Loading loadingAnim={loadingAnim} />}
      <MainHeader darkMode={darkMode} changeDarkMode={changeDarkMode} />
      {/* <Login /> */}
      <AdminLayout />
    </div>
  );
}

export default App;
