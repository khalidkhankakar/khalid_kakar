'use client';

import { useStyleContext } from "@/lib/StyleContext";
import GoodiesSection from "./goodies-section";

const GoodiesPage = () => {

  const { divClassName, divStyle } = useStyleContext()

  return (
    <div className={divClassName}>
      <div
        className="absolute top-0 inset-0 z-0"
        style={divStyle}
      />

       <GoodiesSection />
    </div>
  )
}

export default GoodiesPage
