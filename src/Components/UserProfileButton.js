import axios from "axios";
import React from "react";
import { useExaminatorStore } from "../App";

const UserProfileButton = ({ showUserDropdown, userCollapse }) => {
    const { HTTP, userData, setUserData } = useExaminatorStore();


    const logout = async () => {
        await axios.post(`${HTTP}/logout`)
            .then(res => {
                if (res.status >= 200 && res.status <= 226) {
                    setUserData(null);
                }
            })
            .catch(err => {
                console.log(err);
                setUserData(null);
            });
        showUserDropdown();
    }

    return (
        <div className="lg:relative flex items-center ml-3">
            <button onClick={showUserDropdown} id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex z-[11] text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                <span className="sr-only">Open user menu</span>
                <img className="w-9 h-9 rounded-full object-cover" src="/img/profile.webp" alt="user photo" />
            </button>

            <div id="dropdownAvatar" className={`z-10 ${userCollapse ? '' : 'hidden'} absolute top-[80%] lg:top-[100%] left-0 lg:left-[50%] w-full lg:w-fit lg:translate-x-[-50%] bg-white lg:bg-gray-50 divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{userData.firstName} {userData.lastName}</div>
                    <div className="font-medium truncate">{userData.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            პარამეტრები
                        </a>
                    </li>
                </ul>
                <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-400 dark:hover:text-red-300" onClick={logout}>
                        გასვლა
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserProfileButton;
