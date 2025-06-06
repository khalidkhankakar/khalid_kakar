import { Copy, Plus, User2 } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const IntroCard = () => {
  return (
    <div className=' relative  rounded-3xl h-60    w-[90%] md:w-96 overflow-hidden'>
    <div className="h-2/3 rounded-[30px] p-2 bg-primary text-white z-10 shadow-[0px_0px_90px_0px_rgba(0,0,0,0.3] w-full ">
        <div className='flex w-full  items-center justify-between px-2'>
            <p>Available for Work</p>
            <p>7:17</p>
        </div>

        <div className='flex items-center my-3 mx-4 gap-2.5'>
             <User2 className="h-12 w-12 bg-gray-200 text-black p-2 rounded-full" />
             <div>
                <p className='text-lg font-semibold'>John Doe</p>
                <p className='text-sm text-gray-400'>UI Designer</p>
             </div>
        </div>

        <div className='flex items-center justify-center px-2 gap-3'>
            <Button className='bg-white text-black w-1/2' asChild>
                <div>
                    <Plus />
                    <span>Hire Me</span>
                </div>

                
                </Button>
            <Button className='bg-white text-black w-1/2' asChild>
                 <div>
                    <Copy />
                    <span>Hire Me</span>
                </div>
            </Button>




        </div>

    </div>

    <div className='bg-red-700 pt-12 w-full absolute bottom-11 rounded-[30px] -z-10 h-1/3 '>
hi
    </div>
    </div>
  )
}

export default IntroCard
