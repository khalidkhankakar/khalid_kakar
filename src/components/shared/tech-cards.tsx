"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import BallCanvas from "./canvas/ball-canvas";

export function TechCards() {
  return (
    <div className="rounded-md flex flex-col w-full mb-28 items-center justify-center relative overflow-hidden">
      {/* <InfiniteMovingCards
        items={techCards}
        direction="right"
        speed="fast"
        pauseOnHover={false}
      /> */}
       <div className='flex flex-row flex-wrap justify-center gap-10'>
      {techCards.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.src} />
        </div>
      ))}
    </div>
    </div>
  );
}

const techCards = [
  {
    name:'Javascript',
    src:'/tech-icons/javascript.png'
  },
  {
    name:'TypeScript',
    src:'/tech-icons/typescript.png'
  },
  {
    name:'ReactJs',
    src:'/tech-icons/reactjs.png'
  },
  {
    name:'NodeJS',
    src:'/tech-icons/nodejs.png'
  },
  {
    name:'CSS',
    src:'/tech-icons/css.png'
  },
  {
    name:'Docker',
    src:'/tech-icons/docker.png'
  },
  {
    name:'Figma',
    src:'/tech-icons/figma.png'
  },
  {
    name:'MongoDB',
    src:'/tech-icons/mongodb.png'
  },
  {
    name:'Redux',
    src:'/tech-icons/redux.png'
  },
  {
    name:'Tailwind CSs',
    src:'/tech-icons/tailwind.png'
  }
]