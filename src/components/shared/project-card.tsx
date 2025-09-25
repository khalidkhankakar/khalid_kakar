import { Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {motion} from 'framer-motion'
interface ProjectCard {
 logo: string;
    name: string;
    image: string;
    description: string;
    techs: {
        name: string;
        image: string;
    }[];
}

export const ProjectCard = ({logo, image, name, description, techs,}: ProjectCard) => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start faded and below its final position
      whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position when in view
      viewport={{ once: true }} // Only animate once when the element enters the viewport
      transition={{
        duration: 0.5, // Animation duration
        type: "tween", // Animation type
        stiffness: 50, // Stiffness for the spring effect
        delay: 0.1 // Optional delay before the animation starts
      }}
    className={`relative -top-1/4 overflow-hidden bg-white/90 dark:bg-black/90  bg-clip-padding  backdrop-blur-xs  shadow-lg transition-all duration-300 rounded-3xl  md:h-96 h-[30rem]   `}>
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
  );
};