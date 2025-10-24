import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { navItems } from "./navbar"
import NamePlate from "./name-plate"


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
            <Link href={'/'} className="cursor-pointer">
              <NamePlate />
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
