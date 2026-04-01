import React from 'react';
import play from '../../assets/Play.png';
import banner from '../../assets/banner.png';
import { BiDisc } from 'react-icons/bi';


const Banner = () => {
    return (
        <div className="hero min-h-screen lg:w-10/12 md:w-10/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt="Banner" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-full mx-auto lg:w-1/2 md:w-1/2'>
                    <h1 className='flex items-center gap-2 w-85 text-blue-600 bg-[#E1E7FF] p-2 rounded-full text-lg font-bold'><span className="flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full ">
                        <BiDisc className="text-blue-400 w-4 h-4 text-2xl" />
                    </span> New: AI-Powered Tools Available</h1>
                    <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products

                    </p>
                    <button className="btn text-white mr-4 rounded-full bg-linear-[to_right,#4F39F6,#9514FA]">Explore Products</button>
                    <button className="btn border border-[#4F39F6] border-r-[#9000ff] rounded-full "><img src={play} alt="Play" className='w-4 h-4' /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                        Watch Demo
                    </span></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;