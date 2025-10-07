'use client';

import { useStyleContext } from "@/lib/StyleContext";
import { cn } from "@/lib/utils";

const GoodiesPage = () => {

    const { divClassName, divStyle } = useStyleContext()
    
  return (
    <div className={cn(divClassName, '')}>
      <div
        className="absolute top-0 inset-0 z-0"
        style={divStyle}
      />
      
    </div>
  )
}

export default GoodiesPage
