"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function TechCards() {
  return (
    <div className="rounded-md flex flex-col w-full mb-28 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={techCards}
        direction="right"
        speed="fast"
        pauseOnHover={false}
      />
    </div>
  );
}

const techCards = [
  {
    name:'Javascript',
    src:'/tech-icons/javascript.svg'
  },
  {
    name:'TypeScript',
    src:'/tech-icons/typescript.svg'
  },
  {
    name:'ReactJs',
    src:'/tech-icons/reactjs.svg'
  },
  {
    name:'NextJs',
    src:'/tech-icons/nextjs.svg'
  },
  {
    name:'CSS',
    src:'/tech-icons/css.svg'
  },
  {
    name:'Eslint',
    src:'/tech-icons/eslint.svg'
  },
  {
    name:'GSAP',
    src:'/tech-icons/gsap.svg'
  },
  {
    name:'MySQL',
    src:'/tech-icons/mysql.svg'
  }
]