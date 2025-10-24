'use client';

import { useStyleContext } from "@/components/context/StyleContext";

const BlogPage = () => {

  const { divClassName, divStyle } = useStyleContext()

  return (
    <div className={divClassName}>
      <div
        className="absolute top-0 inset-0 -z-10"
        style={divStyle}
      />

       <div className="relative z-10 py-20 px-10">
         Fetch the blogs here
       </div>
    </div>
  )
}

export default BlogPage
