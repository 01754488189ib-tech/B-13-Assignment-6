import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { RiFacebookCircleLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white pt-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-11/12 mx-auto px-5 lg:px-10">

                <div className="lg:pr-10 text-center sm:text-left">
                    <h2 className='text-2xl font-bold mb-3'>DigiTools</h2>
                    <p className="hover:text-white text-gray-400">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div className="text-center sm:text-left">
                    <h2 className='text-xl font-bold mb-4 text-gray-200'>Product</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Templates</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h2 className='text-xl font-bold mb-4 text-gray-200'>Company</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h2 className='text-xl font-bold mb-4 text-gray-200'>Resources</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Documentation</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Community</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <h2 className='text-xl font-bold mb-4 text-gray-200'>Social Links</h2>
                    <div className="flex gap-4">
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full size-10 flex items-center justify-center font-bold text-white hover:scale-105 transition-transform cursor-pointer'>
                            <GrInstagram />
                        </span>
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full size-10 flex items-center justify-center font-bold text-white hover:scale-105 transition-transform cursor-pointer'>
                            <RiFacebookCircleLine />
                        </span>
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full size-10 flex items-center justify-center font-bold text-white hover:scale-105 transition-transform cursor-pointer'>
                            <FaXTwitter />
                        </span>
                    </div>
                </div>
            </div>

            <div className="border-t-2 hover:border-white border-gray-500 mt-10 w-11/12 mx-auto"></div>

            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto py-8 gap-4 text-center md:text-left">
                <p className="hover:text-white text-gray-500 text-sm">© 2026 Digitools. All rights reserved.</p>
                <div className='flex flex-wrap justify-center gap-6 text-sm text-gray-500'>
                    <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                    <p className="hover:text-white cursor-pointer">Terms of Service</p>
                    <p className="hover:text-white cursor-pointer">Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;