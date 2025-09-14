'use client'
import clsx from 'clsx'
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use';
import Image from 'next/image';
import { Menu, User, User2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useStyleContext } from '@/lib/StyleContext';

const navItems = ["About", "Projects", "Contact", "Skills"];

const Navbar = () => {
    const { setStyle } = useStyleContext();


    return (
        <div
         className="sticky w-full top-0  text-black  z-50  border-b-[1px] transition-all duration-700 "
        >
            <header className=" w-full ">
                <nav className="flex size-full items-center justify-between p-4">
                    {/* Logo and Product button */}
                    <div className="flex items-center gap-3">

                        <Image src={'/profile.jfif'} width={35} height={35} className='object-contain rounded-full' alt='profile' />
                        <p className="text-xl font-semibold tracking-wide">Khalid Kakar</p>
                    </div>

                    {/* Navigation Links and Audio Button */}
                    <div className="flex h-full items-center  ">
                        <div className="hidden  md:flex items-center gap-x-3">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn tracking-wide"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                       <Button onClick={()=> setStyle({ divClassName: "min-h-screen w-full relative", divStyle:{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
    } })} >
                         <Menu className='h-10  w-10' />
                       </Button>
                    
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
