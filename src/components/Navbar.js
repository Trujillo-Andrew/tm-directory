import { Link } from "react-router-dom";

import React, { useState } from "react";
const Navbar = () => {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div>
            <div className="justify-between flex-wrap dark:bg-black dark:text-white border-b-2 border-brandColor bg-white shadow">
                <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                    <ul className="flex">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus === 1 ? "text-sm text-brandColor flex flex-col justify-between border-brandColor pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 dark:text-white dark:hover:text-brandColor py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/">
                            <span className="mb-3 cursor-pointer">{activeStatus === 1 ? "Resources" : "Resources"}</span>
                            {activeStatus === 1 && <div className="w-full h-1 bg-brandColor rounded-t-md" />}
                            </Link>
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus === 2? "text-sm text-brandColor flex flex-col justify-between border-brandColor pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 dark:text-white dark:hover:text-brandColor py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/Tools">
                            <span className="mb-3 cursor-pointer">{activeStatus === 2 ? "Tools" : "Tools"}</span>
                            {activeStatus === 2 && <div className="w-full h-1 bg-brandColor rounded-t-md" />}
                            </Link>
                        </li>
                        <li onClick={() => setActiveStatus(3)} className={activeStatus === 3 ? "text-sm text-brandColor flex flex-col justify-between border-brandColor pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 dark:text-white dark:hover:text-brandColor py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/Socials">
                            <span className="mb-3 cursor-pointer">{activeStatus === 3 ? "Socials" : "Socials"}</span>
                            {activeStatus === 3 && <div className="w-full h-1 bg-brandColor rounded-t-md" />}
                            </Link>
                        </li>
                        <li onClick={() => setActiveStatus(4)} className={activeStatus === 4 ? "text-sm text-brandColor flex flex-col justify-between border-brandColor pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 dark:text-white dark:hover:text-brandColor py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/Business">
                            <span className="mb-3 cursor-pointer">{activeStatus === 4 ? "Business" : "Business"}</span>
                            {activeStatus === 4 && <div className="w-full h-1 bg-brandColor rounded-t-md" />}
                            </Link>
                        </li>
                        <li onClick={() => setActiveStatus(5)} className={activeStatus === 5 ? "text-sm text-brandColor flex flex-col justify-between border-brandColor pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 dark:text-white dark:hover:text-brandColor py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/Projects">
                            <span className="mb-3 cursor-pointer">{activeStatus === 5 ? "Projects" : "Projects"}</span>
                            {activeStatus === 5 && <div className="w-full h-1 bg-brandColor rounded-t-md" />}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
