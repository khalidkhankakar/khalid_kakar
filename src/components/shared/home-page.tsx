'use client';

import { useStyleContext } from "@/lib/StyleContext";
import Navbar from "./navbar";
import HeroSection from "./hero-section";

export default function HomePage() {
  const {divClassName, divStyle} = useStyleContext()

  return (
<div className={divClassName}>
  <div
    className="absolute inset-0 z-0"
    style={divStyle}
  />
     <Navbar />

    <div className="border flex items-center justify-center w-full h-[calc(100vh-150px)]" >
    <HeroSection />
    </div>
     
</div>
  )
}

