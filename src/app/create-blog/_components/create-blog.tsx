'use client'
import { useStyleContext } from '@/components/context/StyleContext'
import React from 'react'
import BlogForm from './blog-form'

const CreateBlog = () => {

    const { divClassName, divStyle } = useStyleContext()
    
  return (
    <div className={divClassName}>
    
        <div
        className="absolute top-0 inset-0  -z-10"
        style={divStyle}
      />
      
      <div className='w-[90vw]  font-poppins Z-10  pt-20 pb-10 max-w-6xl mx-auto '>
        <h1 className='text-2xl mt-2 z-30'>Create Blog post</h1>
        <BlogForm  />
      </div>


    </div>
  )
}

export default CreateBlog
