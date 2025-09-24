'use client';
import { Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface ProjectCard {
 logo: string;
    name: string;
    image: string;
    description: string;
    techs: {
        name: string;
        image: string;
    }[];
    progress:any,
range:any,
targetScale:any,
i: any
}

export const ProjectCard = ({logo,i, image, name, description, techs,progress, range, targetScale }: ProjectCard) => {


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    container: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
    <motion.div
    style={{scale, top:`calc(-5vh + ${i * 25}px)`}} 
    className={`overflow-hidden bg-white/50 dark:bg-black/50  bg-clip-padding  backdrop-blur-xs  shadow-lg transition-all duration-300 rounded-3xl  md:h-96 h-[30rem]   `}>
      {/* Mobile Layout (default) */}
      <div className="block h-full w-full md:hidden">
        {/* Image Section - Mobile */}
        <div className="h-[65%]  p-2">
                      <div className="h-full w-full rounded-3xl overflow-hidden ">

          <img
            src={image}
            alt="Dashboard interface preview"
            className="w-full rounded-2xl h-full  object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        </div>
        
        {/* Content Section - Mobile */}
        <div className="p-3 flex flex-col justify-between h-[calc(100%-65%)] font-poppins">
          {/* Logo */}
          <div className="flex items-center ">
            <div className="w-8 h-8  rounded-sm flex items-center justify-center">
              <span className=" text-xs font-bold">QG</span>
            </div>
            <span className="text-text-body font-medium">{name} </span>
          </div>
          
          {/* Title */}
          <h2 className="text-sm font-semibold ">
            {description}
          </h2>
          
          {/* Year */}
          <p className="text-xs ">
            2021-2022
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            <span className="px-2  bg-white/70 dark:bg-black/70py-1 text-xs rounded-md">
              Design system
            </span>
            <span className="px-2 bg-white/70 dark:bg-black/70 py-1 text-xs rounded-md">
              Management software
            </span>
            <span className="px-2 bg-white/70 dark:bg-black/70 py-1 text-xs rounded-md">
              Portal design
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden  relative z-40 md:flex w-full h-full ">
        <Button variant={'secondary'} className="rounded-full absolute top-3 right-3" asChild>
          <Link href={'#'} >
        <Github />
          
          </Link>
        </Button>
        {/* Image Section - Desktop */}
        <div className="w-[70%] p-2 ">
            <div className="h-full w-full rounded-3xl overflow-hidden ">

          <img
            src={image}
            alt="Dashboard interface preview"
            className="w-full h-full rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
            />
            </div>
        </div>
        
        {/* Content Section - Desktop */}
        <div className=" w-[50%] p-8 flex flex-col font-poppins justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-sm flex items-center justify-center ">
                <span className=" text-sm font-bold">QG</span>
              </div>
              <span className="text-text-body font-medium">{name}</span>
            </div>
            
            {/* Title */}
            <h2 className="text-sm  mb-3">
              {description}
            </h2>
            
            {/* Year */}
            <p className="text-text-caption text-sm mb-8">
              2021-2022
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="px-4 bg-white/70 dark:bg-black/70 py-2 bg-tag-bg text-tag-text text-sm rounded-lg">
              Design system
            </span>
            <span className="px-4 bg-white/70 dark:bg-black/70 py-2 bg-tag-bg text-tag-text text-sm rounded-lg">
              Management software
            </span>
            <span className="px-4 bg-white/70 dark:bg-black/70 py-2 bg-tag-bg text-tag-text text-sm rounded-lg">
              Portal design
            </span>
          </div>
        </div>
      </div>
    </motion.div>
     </div>
  );
};