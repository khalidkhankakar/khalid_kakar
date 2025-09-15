import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const HeroSection = () => {
  return (
 <div className="container font-poppins mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          {/* Badge */}
          <div  className="flex justify-center w-full">
            <div className='shadow-md py-0.5 px-3 flex items-center justify-center bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-slate-300 dark:border-gray-700 gap-2 rounded-2xl' >
              <Image src={'/icons/star.png'} width={30} height={30}  className="object-contain " alt='star' />
             <span> Weekly new feature releases </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 
         
            className="text-2xl lg:text-[48px] font-bold text-center"
          >
            UI Library for React
          </h1>

          {/* Description */}
          <p 
           
            className="text-center text-sm md:text-lg border mx-auto max-w-2xl"
          >
            Open-source collection of UI components and animated effects built with{" "}
            <strong>React</strong>,{" "}
            <strong>TypeScript</strong>,{" "}
            <strong>Tailwind CSS</strong>, and{" "}
            <strong>Motion</strong>. 
            Pairs beautifully with{" "}
            <strong>shadcn/ui</strong>.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button 
              size="lg"
              className=""
            >
              Get Started
            </Button>
          </div>
    </div>
    </div>
  )
}

export default HeroSection
