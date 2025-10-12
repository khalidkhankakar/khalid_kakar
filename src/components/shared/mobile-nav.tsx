import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {  Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { navItems } from "./navbar"


const MobileNav = () => {
  return (
<Sheet>
  <SheetTrigger asChild>
    <div className="md:hidden block">
        <Menu size={25} className="w-6 h-6 cursor-pointer" />
    </div>
  </SheetTrigger>
  <SheetContent className="w-[90vw] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle asChild> 
                 <Link href={'/'} className="flex cursor-pointer items-center gap-2">

                        <div className='border-2  p-0.5 border-green-600  rounded-full relative'>
                            <div className="absolute top-0 right-0 flex h-3 w-3">

                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <Image src={'/profile.jfif'} width={45} height={45} className='object-contain rounded-full' alt='profile' />
                        </div>
                        
                        <div>

                            <p className="text-xl font-semibold tracking-wide">Khalid Kakar</p>
                            <p className="text-gray-400 text-xs tracking-wider font-poppins">Open for work</p>
                        </div>
                    </Link>
      </SheetTitle>
    </SheetHeader>
    <div className="px-4  py-1 h-full font-poppins">
        <div className="flex flex-col">
            {navItems.map((item, index) => (

                                <SheetTrigger key={index} asChild> 
                                <Link
                                    
                                    href={`${item.link}`}
                                    className="text-[2rem]  font-semibold font-poppins tracking-wide hover:border-b  hover:bg-slate-300 dark:hover:bg-gray-700 "
                                >
                                    {item.name}
                                </Link>
                                </SheetTrigger>
                            ))}
        </div>
    </div>
  </SheetContent>
</Sheet>
  )
}

export default MobileNav
