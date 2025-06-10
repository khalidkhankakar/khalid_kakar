'use client';
import React from 'react';
import { Copy, Clock, Zap, User2, CirclePlus, PlusCircle, Download, DownloadCloud } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const IntroCard = () => {
    const handleHireMe = () => {
        console.log('Hire Me clicked');
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jay@sprrrint.com');
        console.log('Email copied to clipboard');
    };

    const { theme } = useTheme()
    console.log(theme)

    return (
        <div className="w-[90%]  mx-auto md:w-[400px] relative">
            {/* Main Card */}
            <div className="bg-primary rounded-4xl p-6 text-white dark:text-black font-sans shadow-2xl relative z-10 mb-4">
                {/* Status and Time */}
                <div className="flex justify-between font-poppins items-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 shadow-md shadow-emerald-500 rounded-full"></div>
                        <span className="text-gray-400 dark:text-gray-700 text-sm">Available for work</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 dark:text-gray-700 text-sm">
                        <Clock size={14} />
                        <span>7:15PM</span>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">

                    <div className="w-14 h-14 border-2 border-gray-500 dark:border-gray-700  rounded-full flex items-center justify-center overflow-hidden">
                        <Image src="/profile.jfif" alt="Profile" width={55} height={55} className='object-cover rounded-full  ' />
                    </div>

                    <div className='font-poppins'>
                        <h2 className="text-lg md:text-xl font-bold uppercase  ">Khalid Kakar</h2>
                        <div className="flex items-center gap-1 text-gray-400 dark:text-gray-700 text-sm">
                            <span>Javascript</span>
                            <span>•</span>
                            <span>NextJs</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center font-poppins justify-around gap-3">
                    <button
                        onClick={handleHireMe}
                        className={cn(theme === 'dark'
                             ? "button-light " : "button", 'w-1/2  font-medium')}
                    >
                        <div className={cn(theme === 'dark' ? "button-overlay-light" : "button-overlay")}></div>
                        <div className='flex items-center justify-center gap-2'>
                            <DownloadCloud size={16} className=' h-4 w-4' />
                            Resume
                        </div>
                    </button>
                    <button className={
                        cn(theme === 'dark' ? "button-light  font-medium" : "button"
                            ,
                            " w-1/2 flex items-center  justify-center"
                        )
                    }>
                        <div className={cn(theme === 'dark' ? "button-overlay-light" : "button-overlay")}></div>
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
            <div className="bg-green-700 text-white rounded-4xl pt-12 pb-6  px-4 flex items-center justify-center h-16 gap-2 font-poppins text-sm relative -z-10 -mt-12">
                <Zap size={16} className='text-orange-400  fill-orange-400' />
                Currently on Full stack
            </div>
        </div>
    );
};

export default IntroCard;