import React from 'react';

const Statistics = () => {
    return (
        <div className="w-full">
            <div className="flex text-white justify-around items-center py-8 px-4 shadow-lg w-full bg-linear-[to_right,#4F39F6,#9514FA]">

                <div className="flex flex-col items-center flex-1 border-r-2 border-white/30 last:border-r-0">
                    <h2 className="text-xl md:text-3xl font-bold">31K+</h2>
                    <p className="text-xs md:text-base opacity-90">Active Users</p>
                </div>

                <div className="flex flex-col items-center flex-1 border-r-2 border-white/30 last:border-r-0">
                    <h2 className="text-xl md:text-3xl font-bold">200+</h2>
                    <p className="text-xs md:text-base opacity-90">Premium Tools</p>
                </div>

                <div className="flex flex-col items-center flex-1">
                    <h2 className="text-xl md:text-3xl font-bold">4.9</h2>
                    <p className="text-xs md:text-base opacity-90">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Statistics;