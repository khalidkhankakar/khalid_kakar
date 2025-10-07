import { Link2, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GoodiesSection = () => {
    return (
        <main className="pt-36 flex flex-col gap-y-2 px-9 font-poppins ">

        <div>
            <h1 className="text-3xl z-40  md:text-4xl font-medium my-3">Goodies & Freebies</h1>
            <p className="w-full z-40 md:w-2/3 text-sm md:text-lg ml-4  ">Daily UI is a series of design challenges sent out every day. I’ve gathered some of the designs I’ve created from these challenges and compiled them into a collection that I plan to keep updated as I complete more. These are smaller design projects that have helped me explore and develop a variety of solutions.</p>
        </div>

<div className='flex flex-col my-9'>

        <div className='flex flex-col gap-y-2' >
            <p className='text-2xl tracking-wide z-40 '>#001</p>
            <Link href={'#'} className='text-xl ml-4 flex items-center gap-2 cursor-pointer z-40 font-medium hover:underline'>Daily UI gathered <LinkIcon className=' w-4 h-4' /></Link>
            <p className='text-sm  z-40 font-light ml-4 w-full md:w-2/3 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti voluptates at blanditiis in, unde cupiditate reprehenderit magni quia nisi, ducimus iusto libero rerum, id quaerat necessitatibus nihil aut facilis.</p>

        <Image src={'/images/1.jpeg'} width={400} height={1000} alt='goodies-1' className='object-contain z-40 rounded-4xl w-1/2   ml-4'/>

        </div>

</div>
        </main>
    )
}

export default GoodiesSection
