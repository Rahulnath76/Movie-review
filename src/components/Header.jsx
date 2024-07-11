import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="sticky z-50 top-0 shadow shadow-slate-800 text-white">
            <nav className="bg-black border-gray-200 px-4 lg-px-6 py-2.5">
                <div className="flex flex-wrap justify-center items-center ">
                    <Link to = "/" className="flex items-center justify-center">
                        <p className="text-4xl ">Movie <span className=" text-orange-500">Finder</span></p>
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Header;