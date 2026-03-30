import React from 'react';
import shopping from "../../assets/shopping-cart.png";


const Navber = () => {
    return (
        <div className="navbar bg-base-100 w-10/12 mx-auto shadow-sm">
            <div className="navbar-start  mx-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content text-3xl font-bold bg-amber-100 p-2 rounded-box z-1 mt-3 w-52 shadow">
                        <button className="btn flex items-center btn-primary mx-auto font-bold  w-18 h-7 rounded-full hover:bg-blue-500">Login</button>
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <a className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-xl font-bold">
                    DigiTools
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <img src={shopping} alt="Shopping Cart" />
                <button className='md:flex lg:flex hidden'>Login</button>
                <a className="btn rounded-full">Get Started</a>
            </div>
        </div>
    );
};

export default Navber;