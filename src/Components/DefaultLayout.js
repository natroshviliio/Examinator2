import React from "react";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";

const DefaultLayout = ({darkMode, changeDarkMode}) => {

    return (
        <div>
            <MainHeader darkMode={darkMode} changeDarkMode={changeDarkMode} />
            <Outlet />
        </div>
    )
}


export default DefaultLayout;