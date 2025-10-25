import { Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from 'framer-motion'
import Image from "next/image";
import { AnimatedTooltip } from "../ui/animated-tooltip";
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

const project_techs:{
    id: number;
    name: string;
    image: string;
  }[] = [
  {
    id:1,
    name:'ReactJS',
    image:'/tech-icons/reactjs.png'
  },
   {
    id:2,
    name:'Figma',
    image:'/tech-icons/figma.png'
  },
   {
    id:3,
    name:'Git',
    image:'/tech-icons/git.png'
  },
   {
    id:4,
    name:'Javascript',
    image:'/tech-icons/javascript.png'
  },
   {
    id:5,
    name:'Tailwind',
    image:'/tech-icons/tailwind.png'
  }
]

export const ProjectCard = ({  name, description}: ProjectCard) => {


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
      className={`overflow-hidden bg-white/90 dark:bg-black/90  bg-clip-padding  backdrop-blur-xs  shadow-lg transition-all duration-300 rounded-3xl  md:h-96 h-100   `}>
      {/* Mobile Layout (default) */}
      <div className="block  h-full w-full relative md:hidden">
         <Button variant={'secondary'} className="rounded-full absolute bottom-3 right-3" asChild>
          <Link href={'#'} >
            <Github />
          </Link>
        </Button>
        {/* Image Section - Mobile */}
        <div className="h-[60%]  p-2">
          <div className="h-full w-full rounded-3xl overflow-hidden ">
            <Image
              src={'/background.jpg'}
              width={700}
              height={500}
              alt="Dashboard interface preview"
              className="w-full rounded-2xl h-full  object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section - Mobile */}
        <div className="px-3 py-2 flex flex-col justify-between h-[calc(100%-60%)] font-poppins">
          {/* Logo */}
          <div className="flex items-center ">
            <span className="font-semibold">{name} </span>
          </div>

          {/* Title */}
          <h2 className="text-xs text-gray-700 dark:text-gray-400  ">
            {description.substring(0, 200)}
          </h2>



          {/* Tags */}
          <div className="flex items-center my-2 flex-wrap gap-1">
           {
              <AnimatedTooltip items={project_techs} />
           }
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

             <Image
              src={'/background.jpg'}
              width={700}
              height={500}
              alt="Dashboard interface preview"
              className="w-full h-full rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section - Desktop */}
        <div className=" w-[50%] p-8 flex flex-col font-poppins ">
          <div>
            {/* Logo */}
            <div className="flex items-center mb-6">
              <span className="font-medium">{name}</span>
            </div>

            {/* Title */}
            <h2 className="text-sm text-gray-700 dark:text-gray-400  mb-3">
              {description}
            </h2>

            {/* Year */}
            <p className="text-sm font-semibold mt-5 mb-2 text-gray-500">Made with</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3">
                         <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
                         <Image src={'/tech-icons/nodejs.png'} width={25} height={25} className="object-contain " alt='star' />
                         <p className='text-xs font-bold text-green-500'>NodeJS</p>
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
                                     <Image src={'/tech-icons/nodejs.png'} width={25} height={25} className="object-contain " alt='star' />
                                     <p className='text-sm font-bold text-green-500'>NodeJS</p>
                                   </div>
                       
                                     <div className='flex items-center gap-1 rounded-full bg-white dark:bg-black  py-1 px-2 shadow-md '>
                                     <Image src={'/tech-icons/reactjs.png'} width={25} height={25} className="object-contain " alt='star' />
                                     <p className='text-sm font-bold text-blue-500'>ReactJS</p>
                                   </div>
                       
                                     
          </div>
        </div>
      </div>
    </motion.div>
  );
};