import React from 'react'
import { ArticalsGrid } from './articals-grid'

const BlogSection = () => {
  return (
   <div className='z-40 w-full space-y-3 mx-auto mb-24' >
              <p className='text-xl md:text-4xl font-semibold tracking-wider  text-center mb-6 '>Popular Blogs</p>
  
          <ArticalsGrid />
          </div>
  )
}

export default BlogSection
