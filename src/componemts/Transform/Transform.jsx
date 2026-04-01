import React from 'react';

const Transform = () => {
    return (
        <div className='space-y-4 flex flex-col items-center justify-center p-6 md:p-10 md:space-y-6 mt-5 text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='text-white space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className='flex gap-2'>
                <button className="btn hover:scale-105 transition-transform border border-white bg-transparent text-white rounded-full px-6">
                    Explore Products
                </button>
                <button className="btn hover:scale-105 transition-transform bg-white text-[#4F39F6] rounded-full px-6 border-none">
                    View Pricings
                </button>
            </div>
            <p className='text-white text-sm opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Transform;