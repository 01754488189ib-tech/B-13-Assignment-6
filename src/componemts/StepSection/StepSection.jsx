import React from 'react';
import packageIcon from '../../assets/package.png';
import rocketIcon from '../../assets/rocket.png';
import userIcon from '../../assets/user.png';

const StepSection = () => {
    const steps = [
        { id: '01', icon: userIcon, title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required.' },
        { id: '02', icon: packageIcon, title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.' },
        { id: '03', icon: rocketIcon, title: 'Start Creating', desc: 'Download and start using your premium tools immediately.' }
    ];

    return (
        <div className="bg-gray-50 py-24">
            <div className="text-center mb-16 px-4">
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Get Started in 3 Steps</h2>
                <p className='text-gray-600'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 md:w-10/12 mx-auto">
                {steps.map(step => (
                    <div key={step.id} className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                        <span className="absolute top-6 right-6 text-4xl font-black text-gray-50 group-hover:text-indigo-50 transition-colors">{step.id}</span>
                        <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                            <img src={step.icon} alt={step.title} className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepSection;