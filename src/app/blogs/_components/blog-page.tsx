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
        <div className="relative z-10 py-20 px-10 text-white text-center">
          Loading blogs...
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
