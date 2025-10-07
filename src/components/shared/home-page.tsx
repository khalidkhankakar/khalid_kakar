'use client';

import { useStyleContext } from "@/lib/StyleContext";
import HeroSection from "./hero-section";
import About from "./about";
import BlogSection from "./blog-section";
import { TechCards } from "./tech-cards";
import ContactCard from "./contact-card";
import MyGallery from "./my-gallery";

export default function HomePage() {
  const { divClassName, divStyle } = useStyleContext()


  return (
    <div className={divClassName}>
      <div
        className="absolute top-0 inset-0  z-0"
        style={divStyle}
      />

      <div className=" pt-20 flex items-center justify-center w-full h-[calc(100vh-150px)]" >
        <HeroSection />
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

