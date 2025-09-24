'use client';
import React from 'react'
import { ProjectCard } from './project-card'
import { PROJECT_CARDS } from '@/lib/utils'
const About = () => {

    return (
        <div  className='z-40 w-full space-y-3 mx-auto mb-10' >
            <p className='text-xl md:text-4xl font-semibold tracking-wider  text-center'>Some Projects</p>
  
            <div className='relative'>

                {
                    PROJECT_CARDS.map((pro, i) => {

                        const targetScale = 1 - ( (PROJECT_CARDS.length - i) * 0.05);
          
                      return  <ProjectCard
                        key={pro.logo}
                        {...pro}
                        i={i}
                        />
                    })
                }
          
            </div>
 </div>
       
    )
}

export default About
