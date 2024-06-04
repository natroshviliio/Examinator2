import { useEffect, useState } from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
import Login from './Components/Login';



function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [moding, setModing] = useState(false);
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
    const _darkMode = localStorage.getItem('darkMode');
    if (_darkMode === "false") setDarkMode(false);
    else setDarkMode(true);
  }, []);


  return (
    <div className={`bg-teal-300 dark:bg-slate-800 flex flex-col h-screen p-3 ${darkMode ? 'dark' : 'light'}`}>
      <MainHeader darkMode={darkMode} changeDarkMode={changeDarkMode} />
      <Login />
    </div>
  );
}

export default App;
