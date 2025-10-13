'use client'
import { useStyleContext } from '@/lib/StyleContext'
import React from 'react'
import BlogForm from './blog-form'

const CreateBlog = () => {

    const { divClassName, divStyle } = useStyleContext()
    
  return (
    <div className={divClassName}>
    
      
      <div className='w-[90vw] font-poppins  pt-20 max-w-6xl mx-auto '>
        <h1 className='text-2xl mt-2 z-30'>Create Blog post</h1>
        <BlogForm  />
      </div>


        {/* <div
        className="absolute top-0 inset-0  z-0"
        style={divStyle}
      /> */}
    </div>
  )
}

export default CreateBlog
