import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Hint from './hint'

const HeroSection = () => {
  return (
    <div className="container font-poppins mx-auto px-4 py-20 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Badge */}
        <div className="flex justify-center w-full">
          <div className='shadow-md text-xs md:text-sm py-0 md:py-0.5 px-3 flex items-center justify-center bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-slate-300 dark:border-gray-700 gap-2 rounded-2xl' >
            <Image src={'/icons/ai.svg'} width={25} height={25} className="object-contain " alt='star' />
            <span> Weekly new feature releases </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className="text-2xl lg:text-[48px] font-bold text-center  font-zentry uppercase"
        >
        Khalid Khan Kakar
        </h1>

        {/* Description */}
        <p

          className="text-center text-sm md:text-lg  mx-auto max-w-2xl"
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


        <div className='flex  items-center mx-auto justify-center flex-wrap mt-5 gap-x-5 gap-y-3 max-w-2xl'>
            <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
              <Image src={'/tech-icons/javascript.png'} width={25} height={25} className="object-contain " alt='star' />
              <p className='text-sm font-bold text-yellow-500'>JavaScript</p>
            </div>

              <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
              <Image src={'/tech-icons/typescript.png'} width={25} height={25} className="object-contain " alt='star' />
              <p className='text-sm font-bold text-blue-500'>TypeScript</p>
            </div>

              <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
              <Image src={'/tech-icons/nodejs.png'} width={25} height={25} className="object-contain " alt='star' />
              <p className='text-sm font-bold text-green-500'>NodeJS</p>
            </div>

              <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
              <Image src={'/tech-icons/reactjs.png'} width={25} height={25} className="object-contain " alt='star' />
              <p className='text-sm font-bold text-blue-500'>ReactJS</p>
            </div>

              <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
              <Image src={'/icons/nextjs.svg'} width={25} height={25} className="object-contain " alt='star' />
              <p className='text-sm font-bold '>NextJS</p>
            </div>

              <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
              <Image src={'/tech-icons/git.png'} width={25} height={25} className="object-contain " alt='star' />
              <p className='text-sm font-bold text-red-500 '>GitHub</p>
            </div>
              <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
              <Image src={'/icons/mysql.svg'} width={25} height={25} className="object-contain " alt='star' />
              <p className='text-sm font-bold text-blue-500 '>MySQL</p>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default HeroSection
