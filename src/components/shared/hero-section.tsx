import { cn } from '@/lib/utils'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black" />

 <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >

        <h1 className="special-font uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[6rem] absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl  lg:text-[6rem] ">
              redefi<b>n</b>e
            </h1>
          </div>
        </div>
      </div>

      <h1 className="uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[6rem] absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  )
}

export default HeroSection
