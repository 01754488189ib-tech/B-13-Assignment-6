import React from 'react';

const PricingTable = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center p-6 md:p-10 space-y-4 md:space-y-6 mt-5 text-center'>
                <h2 className='text-3xl md:text-5xl font-bold'>Simple, Transparent Pricing</h2>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10 max-w-7xl mx-auto items-stretch">

                <div className="card hover:scale-105 transition-transform bg-base-100 shadow-sm flex flex-col h-full border border-base-200">
                    <div className="card-body flex flex-col h-full">
                        <span className="text-3xl font-bold">Starter</span>
                        <h2 className="font-bold opacity-60">Perfect for getting started</h2>
                        <span><span className='text-3xl font-bold opacity-80'>$0</span>/Month</span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs flex-grow">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn hover:scale-105 transition-transform text-white text-xl rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn-block border-none">Get Started Free</button>
                        </div>
                    </div>
                </div>

                <div className="card relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:scale-105 transition-transform shadow-sm flex flex-col h-full">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <h1 className='p-2 px-6 bg-[#FEF3C6] rounded-full text-center text-[#BB4D00] text-sm font-bold whitespace-nowrap shadow-md'>
                            Most Popular
                        </h1>
                    </div>

                    <div className="card-body flex flex-col h-full pt-10">
                        <span className="text-3xl font-bold">Pro</span>
                        <h2 className="font-bold">Best for professionals</h2>
                        <span><span className='text-3xl font-bold '>$29</span>/Month</span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs flex-grow">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn hover:scale-105 transition-transform text-xl rounded-full btn-block bg-white border-none group">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA] font-bold">
                                    Get Started Free
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card h-full hover:scale-105 transition-transform bg-base-100 shadow-sm flex flex-col border border-base-200">
                    <div className="card-body flex flex-col h-full">
                        <span className="text-3xl font-bold">Enterprise</span>
                        <h2 className="font-bold opacity-60">For teams and businesses</h2>
                        <span><span className='text-3xl font-bold opacity-80'>$99</span>/Month</span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs flex-grow">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn hover:scale-105 transition-transform text-white text-xl rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn-block border-none">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingTable;