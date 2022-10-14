import { Link } from "react-router-dom";

import React, { useState } from "react";
const Navbar = () => {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div>
            <div className="justify-between flex-wrap  bg-white rounded shadow">
                <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                    <ul className="flex">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus === 1 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/">
                            <span className="mb-3 cursor-pointer">{activeStatus === 1 ? "Resources" : "Resources"}</span>
                            {activeStatus === 1 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                            </Link>
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus === 2 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/Socials">
                            <span className="mb-3 cursor-pointer">{activeStatus === 2 ? "Socials" : "Socials"}</span>
                            {activeStatus === 2 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                            </Link>
                        </li>
                        <li onClick={() => setActiveStatus(3)} className={activeStatus === 3 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/Business">
                            <span className="mb-3 cursor-pointer">{activeStatus === 3 ? "Business" : "Business"}</span>
                            {activeStatus === 3 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                            </Link>
                        </li>
                        <li onClick={() => setActiveStatus(4)} className={activeStatus === 4 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <Link to="/Projects">
                            <span className="mb-3 cursor-pointer">{activeStatus === 4 ? "Projects" : "Projects"}</span>
                            {activeStatus === 4 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
