import React from 'react';

const Statistics = () => {
    return (
        <div className="w-full">
            <div className="flex text-white justify-around items-center py-10 px-4 shadow-lg w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                <div className="flex flex-col items-center flex-1 border-r border-white/20">
                    <h2 className="text-2xl md:text-4xl font-black">31K+</h2>
                    <p className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">Active Users</p>
                </div>

                <div className="flex flex-col items-center flex-1 border-r border-white/20">
                    <h2 className="text-2xl md:text-4xl font-black">200+</h2>
                    <p className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">Premium Tools</p>
                </div>

                <div className="flex flex-col items-center flex-1">
                    <h2 className="text-2xl md:text-4xl font-black">4.9</h2>
                    <p className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">User Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;