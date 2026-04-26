import React from 'react';

const Statistics = () => {
    return (
        <div className="w-full py-10">
            <div className="w-11/12 md:w-10/12 mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-2xl">
                <div className="flex flex-col md:flex-row text-white py-10">
                    <div className="flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/20 py-6">
                        <h2 className="text-4xl md:text-5xl font-black">31K+</h2>
                        <p className="uppercase tracking-widest text-xs font-bold opacity-80 mt-2">Active Users</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/20 py-6">
                        <h2 className="text-4xl md:text-5xl font-black">200+</h2>
                        <p className="uppercase tracking-widest text-xs font-bold opacity-80 mt-2">Premium Tools</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-6">
                        <h2 className="text-4xl md:text-5xl font-black">4.9</h2>
                        <p className="uppercase tracking-widest text-xs font-bold opacity-80 mt-2">Global Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;