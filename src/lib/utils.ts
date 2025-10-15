import { clsx, type ClassValue } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const DYNAMIC_BACKGROUNDS: {
    name: string;
    divClassName: string;
    divStyle: React.CSSProperties;
    theme:string
}[] = [
  {
    name: "Soft Lavender",
    divClassName:"min-h-screen w-full bg-white relative overflow-hidden z-0",
    divStyle:{
     backgroundImage: `
       radial-gradient(circle at center, #c4b5fd, transparent)
     `,
   }, 
   theme:'light'
  },
  {
    name: "Diagonal Grid",
    divClassName:"min-h-screen w-full bg-[#0f0f0f] relative text-white z-0",
    divStyle:{
        backgroundImage: `
   repeating-linear-gradient(45deg, rgba(255, 140, 0, 0.12) 0, rgba(255, 140, 0, 0.12) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(-45deg, rgba(255, 69, 0, 0.08) 0, rgba(255, 69, 0, 0.08) 1px, transparent 1px, transparent 22px)
        `,
        backgroundSize: "44px 44px",
      },
      theme:'dark'
  },
   {
    name: "Aurora Dream",
    divClassName:"min-h-screen w-full relative  z-0",
    divStyle:{
      background: `
       radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
    },
      theme:'light'
  },
  {
    name: "Dark Dotted",
    divClassName:"min-h-screen w-full bg-[#0f172a] relative  z-0",
    divStyle:{
      background: "#0f172a",
      backgroundImage: `
        radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
        radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
        radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px, 40px 40px, 60px 60px",
      backgroundPosition: "0 0, 10px 10px, 30px 30px",
    },
      theme:'dark'
  }
]


export const PROJECT_CARDS = [
  {
    logo:'logo1',
    name:'Lorem ipsum dolor, sit amet1 ',
    image:'https://docs.material-tailwind.com/img/team-3.jpg',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis deleniti corrupti veniam! Architecto veniam inventore perferendis minus repellendus ipsum amet nobis voluptate magni eaque itaque consequuntur illum, dolorem laborum officia.',
    techs:[
      {
        name:'name',
        image:'image'
      }
    ]
  },
  {
    logo:'logo2',
    name:'Lorem ipsum dolor, sit amet ',
    image:'https://docs.material-tailwind.com/img/team-3.jpg',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis deleniti corrupti veniam! Architecto veniam inventore perferendis minus repellendus ipsum amet nobis voluptate magni eaque itaque consequuntur illum, dolorem laborum officia.',
    techs:[
      {
        name:'name',
        image:'image'
      }
    ]
  },
  {
    logo:'logo3',
    name:'Lorem ipsum dolor, sit amet ',
    image:'https://docs.material-tailwind.com/img/team-3.jpg',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis deleniti corrupti veniam! Architecto veniam inventore perferendis minus repellendus ipsum amet nobis voluptate magni eaque itaque consequuntur illum, dolorem laborum officia.',
    techs:[
      {
        name:'name',
        image:'image'
      }
    ]
  }
]


export function formatDate(isoString:Date) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
  });
}
export function calculateReadingTime(htmlContent:string) {
  const wordsPerMinute = 200; // Average reading speed

  // Remove HTML tags using regex
  const textContent = htmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  // Count words
  const words = textContent.split(' ').length;

  // Calculate estimated reading time
  const readingTime = Math.ceil(words / wordsPerMinute);

  return `${readingTime} min read`;

  return `${readingTime} min read`;
}