import { getAllBlogs } from '@/actions/blog.actions';
import React from 'react'
import ArticalCard from './_components/artical-card';

const page = async () => {

  const blogs = await getAllBlogs();
  if (blogs.data.length <= 0) {
    return (<div className='min-h-screen py-20 overflow-y-auto max-w-[85%] lg:max-w-4xl mx-auto  text-white '>No blog found</div>);
  };


  return (
    <div className=' overflow-y-auto w-full mx-auto   py-20  text-white '>
        <div className='flex items-center flex-col gap-y-3 '>
          {
            blogs?.data?.map((blog,index) => (
            <ArticalCard
              key={blog.slug + index}
              slug={blog.slug}
              title={blog.title}
              imageUrl={blog.image}
              description={blog.description}
              tags={blog.tags} />))

          }

        </div>

      </div>
  )
}

export default page
