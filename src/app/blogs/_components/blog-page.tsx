'use client';

import { useStyleContext } from "@/components/context/StyleContext";
import {  useTRPC } from "@/trpc/client";
import ArticalCard from "./artical-card";
import { useQuery } from "@tanstack/react-query";

const BlogPage = () => {
  const trpc = useTRPC()
  const { divClassName, divStyle } = useStyleContext();
  
  const { data: blogsData, isLoading, error } = useQuery(trpc.blog.getAllBlogs.queryOptions());

  if (isLoading) {
    return (
      <div className={divClassName}>
        <div className="absolute top-0 inset-0 -z-10" style={divStyle} />
        <div className="relative z-10 py-20 px-10">
          <div className="flex flex-col gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex flex-col w-[90vw] md:flex-row items-center bg-dark-2/80 border text-white p-4 md:p-6 rounded-sm shadow-lg mx-auto animate-pulse">
                {/* Image skeleton */}
                <div className="w-full md:w-1/3">
                  <div className="relative w-full h-60 rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800" />
                </div>

                {/* Content skeleton */}
                <div className="md:ml-6 mt-4 md:mt-0 w-full md:w-2/3 text-center md:text-left">
                  {/* Title skeleton */}
                  <div className="h-7 bg-gray-700 dark:bg-gray-800 rounded w-3/4 mx-auto md:mx-0" />
                  
                  {/* Description skeleton */}
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-700 dark:bg-gray-800 rounded w-full" />
                    <div className="h-4 bg-gray-700 dark:bg-gray-800 rounded w-5/6" />
                  </div>

                  {/* Tags skeleton */}
                  <div className="flex items-center gap-2 my-3 justify-center md:justify-normal flex-wrap">
                    {[1, 2, 3].map((tagIndex) => (
                      <div key={tagIndex} className="w-16 h-6 bg-gray-700 dark:bg-gray-800 rounded" />
                    ))}
                  </div>

                  {/* Author skeleton */}
                  <div className="flex items-center justify-center md:justify-start mt-4">
                    <div className="w-10 h-10 bg-gray-700 dark:bg-gray-800 rounded-full" />
                    <div className="ml-2 w-24 h-5 bg-gray-700 dark:bg-gray-800 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={divClassName}>
        <div className="absolute top-0 inset-0 -z-10" style={divStyle} />
        <div className="relative z-10 py-20 px-10 text-white text-center">
          Error: {error.message}
        </div>
      </div>
    );
  }

  if(blogsData && blogsData?.blogs && blogsData.blogs.length <=0 ){
    return (<div className={divClassName}>
        <div className="absolute top-0 inset-0 -z-10" style={divStyle} />
        <div className="relative z-10 py-20 px-10 text-white text-center">
          No blogs found
        </div>
      </div>)
  }

  return (
    <div className={divClassName}>
      <div
        className="absolute top-0 inset-0 -z-10"
        style={divStyle}
      />

      <div className="relative z-10 py-20 px-10">
        <div className="flex flex-col gap-8">
          {blogsData?.blogs.map((blog) => (
            <ArticalCard
              key={blog.id}
              slug={blog.slug}
              title={blog.title}
              image={blog.image}
              description={blog.description}
              tags={blog.tags || []}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
