'use client';

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import ZoomParallax from "./zoom-parallax";


const MyGallery = () => {

        useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


  return (
    <div className="mb-20 w-full  z-40 ">
      <p className='text-xl md:text-4xl font-semibold tracking-wider  text-center'>My Gallery</p>
      <ZoomParallax/>
      
    </div>
  )
}

export default MyGallery
