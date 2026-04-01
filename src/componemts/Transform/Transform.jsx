import React from 'react';

const Transform = () => {
    return (
        <div className='space-y-4 flex flex-col items-center justify-center p-6 md:p-10 md:space-y-6 mt-5 text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='text-white space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
            <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div>
                <button className="btn mr-2 hover:scale-105 transition-transform border border-[#4F39F6] border-r-[#9000ff] rounded-full "><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</span></button>
            <button className="btn hover:scale-105 transition-transform text-white mr-4 rounded-full bg-linear-[to_right,#4F39F6,#9514FA]">View Pricings</button>
            </div>
            <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Transform;