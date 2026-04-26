import React from 'react';
import { GiShoppingCart } from "react-icons/gi";

const Navbar = ({ selectedcard }) => {
    return (
        <div className="navbar bg-base-100 w-10/12 mx-auto shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-gray-700">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <a className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl font-bold cursor-pointer">
                    DigiTools
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-gray-700">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end gap-4 flex items-center">
                <div className="relative cursor-pointer hover:scale-110 transition-transform mr-2">
                    <GiShoppingCart className="text-3xl text-gray-700" />
                    {selectedcard.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white">
                            {selectedcard.length}
                        </span>
                    )}
                </div>
                <button className='hidden md:block font-bold text-gray-700 hover:text-primary transition-colors'>Login</button>
                <a className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-none px-6 hover:opacity-90">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Navbar;