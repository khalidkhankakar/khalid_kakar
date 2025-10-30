'use client';

import { useStyleContext } from "@/components/context/StyleContext";
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
      <div className="w-full h-screen">
        <div className="  pt-20 flex items-center justify-center h-[calc(100vh-50px)] " >
          <HeroSection />
        </div>
        <div className="h-[50px]  mb-10  flex items-center justify-center">
          <ArrowDown size={50} className="w-10 font-black border p-2 rounded-full h-10 animate-bounce  " />
        </div>

      </div>
      <div>
        <div className="max-w-xl px-6 mx-auto font-poppins lg:max-w-3xl lg:px-0">
          <h1 className="text-4xl font-semibold leading-tight  md:text-5xl lg:text-6xl lg:leading-none lg:font-medium xl:text-7xl">Life</h1>
          <p className="mt-6 text-lg  md:text-xl lg:text-2xl">I was born in upstate New York, lived in Florida for 13 years, and have since made my way back to the Northeast.</p>
          <p className="mt-6 text-lg  md:text-xl lg:text-2xl">I currently live in New York City + absolutely love it here!</p>
        </div>
        <MyGallery />
        <div className="flex w-[90vw] max-w-6xl mx-auto  flex-col items-center justify-center ">
          <About />
          <BlogSection />
          <TechCards />
          <ContactCard />
        </div>
      </div>

    </div>
  )
}

