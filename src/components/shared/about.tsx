import React from 'react'
import { ProjectCard } from './project-card'

const About = () => {
    return (
        <div className='z-40 w-full space-y-3 mx-auto mb-10' >
            <p className='text-xl md:text-4xl font-semibold tracking-wider  text-center mb-6 '>Some Projects</p>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        
        </div>
    )
}

export default About
