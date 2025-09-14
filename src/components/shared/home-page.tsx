'use client';

import { useStyleContext } from "@/lib/StyleContext";
import Navbar from "./navbar";

export default function HomePage() {
  const {divClassName, divStyle} = useStyleContext()

  return (
<div className={divClassName}>
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={divStyle}
  />
     <Navbar />
</div>
  )
}

