'use client'
import clsx from 'clsx'
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use';
import { ModeToggle } from './mode-toggle';
import Image from 'next/image';
import { Menu, User, User2 } from 'lucide-react';
import { Button } from '../ui/button';

const navItems = ["About", "Projects", "Contact", "Skills"];

const Navbar = () => {


    const navContainerRef = useRef<HTMLDivElement>(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
        if (!navContainerRef.current) return
        if (currentScrollY === 0) {
            // Topmost position: show navbar without floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            // Scrolling down: hide navbar and apply floating-nav
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up: show navbar with floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);


    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-2 top-2 bg-primary text-white dark:text-black z-50 h-14 border-none transition-all duration-700  rounded-xl sm:inset-x-6 "
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
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

                       <ModeToggle />
                       <Button className='!border-none !bg-transparent !shadow-none cursor-pointer md:hidden ' >
                         <Menu className='h-10  w-10' />
                       </Button>
                      
                        {/* <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button> */}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
