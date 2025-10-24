import React from 'react'
import { ProjectCard } from './project-card'
import { PROJECT_CARDS } from '@/lib/utils'
const About = () => {

    return (
        <div  className='z-40 w-full space-y-3 mx-auto mb-10' >
            <p className='text-xl md:text-4xl font-bold font-zentry tracking-widest  '>Amazing Projects</p>

                {
                    PROJECT_CARDS.map((pro) => {
                      return  <ProjectCard
                        key={pro.logo}
                        {...pro}
                        
                        />
                    })
                }
          
    
 </div>
       
    )
}

export default About
