'use client';

import { useStyleContext } from "@/lib/StyleContext";
import HeroSection from "./hero-section";
import About from "./about";
import BlogSection from "./blog-section";
import { TechCards } from "./tech-cards";
import ContactCard from "./contact-card";
import MyGallery from "./my-gallery";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  const { divClassName, divStyle } = useStyleContext()


  return (
    <div className={divClassName}>
      <div
        className="absolute top-0 inset-0  z-0"
        style={divStyle}
      />

      <div className="  pt-20 flex items-center justify-center w-full h-[calc(100vh-50px)]" >
        <HeroSection />
      </div>
       <div className="h-[50px]  mb-10  flex items-center justify-center">
  <ArrowDown  size={50} className="w-10 font-black border p-2 rounded-full h-10 animate-bounce  "/>
</div>
      <div className="flex w-[90vw] max-w-6xl mx-auto  flex-col items-center justify-center ">
     
        <About />
        <BlogSection />
        <MyGallery />
        <TechCards />
        <ContactCard />
      </div>

    </div>
  )
}

