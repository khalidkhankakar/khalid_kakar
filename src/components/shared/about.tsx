'use client';
import React from 'react'
import { ProjectCard } from './project-card'
import { PROJECT_CARDS } from '@/lib/utils'
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'


const About = () => {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container:ref,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    if(!ref.current) return;
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


    return (
        <div className='z-40 w-full space-y-3 mx-auto mb-10' >
            <p className='text-xl md:text-4xl font-semibold tracking-wider  text-center mb-6 '>Some Projects</p>
  
            <div ref={ref} className=' relative mt-[50vh]'>

                {
                    PROJECT_CARDS.map((pro, i) => {

                        const targetScale = 1 - ( (PROJECT_CARDS.length - i) * 0.05);
          
                      return  <ProjectCard
                        key={pro.logo}
                        {...pro}
                        i={i}
                        progress={scrollYProgress}
                         range={[i * .25, 1]} 
                         targetScale={targetScale}
                        />
                    })
                }
          
            </div>
 </div>
       
    )
}

export default About
