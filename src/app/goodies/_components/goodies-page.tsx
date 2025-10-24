'use client';

import { useStyleContext } from "@/components/context/StyleContext";
import GoodiesSection from "./goodies-section";

const GoodiesPage = () => {

  const { divClassName, divStyle } = useStyleContext()

  return (
    <div className={divClassName}>
      <div
        className="absolute top-0 inset-0 -z-10"
        style={divStyle}
      />

       <div className="relative z-10">
         <GoodiesSection />
       </div>
    </div>
  )
}

export default GoodiesPage
