'use client';
import { cn } from '@/lib/utils'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import IntroCard from './intro-card';


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {


  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">


      <div
        id='video-frame'
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "relative z-10 h-dvh  w-screen overflow-hidden rounded-lg flex items-center flex-col justify-center "
        )}

      >

        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center   " /> */}

        <h1 className="--font-zentry uppercase font-zentry font-black text-5xl sm:right-10 sm:text-5xl md:text-5xl lg:text-[5rem] absolute bottom-3 right-5 z-40 text-blue-75">
          C<b>O</b>DING
        </h1>

        <div className=' w-[90%] mt-12 mx-auto md:w-[400px] flex  flex-col '>
          <p className='font-poppins text-lg text-red-700 md:text-2xl font-black mx-3 md:mx-0'>Hey it's</p>
          <IntroCard />
        </div>
          <p className='font-poppins text-sm tracking-tight md:[96vw] md:w-[70vw] lg:w-1/2 lg:text-2xl mt-1.5 text-center text-red-700 md:text-xl font-black mx-3 md:mx-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repellat praesentium ex.</p>

        <div className="absolute  -left-3 -top-4 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font uppercase font-zentry font-black text-5xl sm:right-10 sm:text-5xl  lg:text-[5rem] ">
              redefi<b>n</b>e
            </h1>
          </div>
        </div>
      </div>

      <h1 className="uppercase font-zentry font-black text-5xl sm:right-10 sm:text-5xl md:text-5xl lg:text-[5rem] absolute bottom-3 right-5 text-red-700">
        C<b>O</b>DING
      </h1>
    </div>
  )
}

export default HeroSection
