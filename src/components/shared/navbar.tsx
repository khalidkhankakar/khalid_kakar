'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { useStyleContext } from '@/lib/StyleContext';
import BackgroundDropdown from './background-dropdown';
const navItems = ["Goodies", "Ariticals", "Contact"];

const Navbar = () => {
    const { setStyle } = useStyleContext();


    return (
        <div
            className="sticky w-full top-0   text-black dark:text-white  z-50  border-b-[1px] transition-all duration-700  bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 "
        >
            <header className=" w-full ">
                <nav className="flex size-full items-center justify-between px-4 py-3">
                    {/* Logo and Product button */}
                    <div className="flex  items-center gap-2">

                        <div className='border-2 p-0.5 border-green-600  rounded-full relative'>
                            <div className="absolute top-0 right-0 flex h-3 w-3">

                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <Image src={'/profile.jfif'} width={45} height={45} className='object-contain rounded-full' alt='profile' />
                        </div>
                        <div>

                            <p className="text-xl font-semibold tracking-wide">Khalid Kakar</p>
                            <p className="text-gray-400 text-xs tracking-wider font-poppins">Open for work</p>
                        </div>
                    </div>

                    {/* Navigation Links and Audio Button */}
                    <div className="flex h-full items-center  ">
                        <div className="hidden  md:flex items-center gap-x-3">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-lg font-poppins tracking-wide"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* <Button onClick={() => setStyle({
                            divClassName: "min-h-screen w-full relative", divStyle: {
                                background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
                            }
                        })} >
                            <Menu className='h-10  w-10' />
                        </Button> */}
                        <div className='mx-3'>
                            <BackgroundDropdown />
                        </div>

                    </div>
                </nav>
            </header>
        </div >
    )
}

export default Navbar
