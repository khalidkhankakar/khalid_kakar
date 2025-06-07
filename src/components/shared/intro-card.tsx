'use client';
import React from 'react';
import { Copy, Clock, Zap, User2, CirclePlus, PlusCircle } from 'lucide-react';

const IntroCard = () => {
    const handleHireMe = () => {
        console.log('Hire Me clicked');
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jay@sprrrint.com');
        console.log('Email copied to clipboard');
    };

    return (
        <div className="w-[90%] md:w-[400px] relative">
            {/* Main Card */}
            <div className="bg-primary
            rounded-4xl p-6 text-white dark:text-black font-sans shadow-2xl relative z-10 mb-4">
                {/* Status and Time */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-400 dark:text-gray-700 text-sm">Available for work</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 dark:text-gray-700 text-sm">
                        <Clock size={14} />
                        <span>7:15PM</span>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">

                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center">
                        <User2 size={24} className="text-gray-900" />
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-semibold  ">Khalid Khan</h2>
                        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-700 text-sm">
                            <span>Javascript</span>
                            <span>•</span>
                            <span>NextJs</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-around gap-3">
                    <button
                        onClick={handleHireMe}
                        className="button-light w-1/2  font-medium"
                    >
                        <div className="button-overlay-light"></div>
                        <div className='flex items-center justify-center gap-2'>
                            <PlusCircle size={16} className=' h-4 w-4' />

                            Hire Me
                        </div>
                    </button>
                    <button className="button w-1/2 flex items-center  justify-center">
                        <div className="button-overlay"></div>
                        <div className=' flex items-center justify-center gap-2'>
                            <Copy size={16} className='h-4 w-4' />

                            Email
                        </div>

                    </button>
                    {/* <button
            onClick={handleCopyEmail}
            className="w-1/2 bg-gray-700 text-sm md:text-lg  hover:bg-gray-600 transition-colors rounded-2xl py-3 px-4 flex items-center justify-center gap-2 text-white font-medium "
          >
            <Copy size={16} className='h-4 w-4' />
             Email
          </button> */}
                </div>
            </div>

            {/* Bottom Green Section - Behind main card, partially hidden */}
            <div className="bg-red-700 text-white rounded-4xl pt-12 pb-6  px-4 flex items-center justify-center h-16 gap-2 font-sans font-semibold relative -z-10 -mt-12">
                <Zap size={20} className='text-orange-400  fill-orange-400' />
                Currently High on Creativity
            </div>
        </div>
    );
};

export default IntroCard;