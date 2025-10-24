import Link from 'next/link';
import BackgroundDropdown from './background-dropdown';
import MobileNav from './mobile-nav';
import NamePlate from './name-plate';
export const navItems = [
    {
        name: 'Goodies',
        link: '/goodies'
    },
    {
        name: 'Articals',
        link: '/#articals'
    },
    {
        name: 'Contact',
        link: '/#contact'
    }
]

const Navbar = () => {
    return (
        <div
            className="fixed w-full top-0 text-black dark:text-white  z-50  border-b-[1px] transition-all duration-700  bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 "
        >
            <header className=" w-full ">
                <nav className="flex size-full items-center justify-between px-4 py-3">
                    {/* Logo and Product button */}
                    <Link href={'/'} className="cursor-pointer ">
                       <NamePlate />
                    </Link>

                    {/* Navigation Links and Audio Button */}
                    <div className="flex h-full items-center  ">
                        <div className="hidden  md:flex items-center gap-x-3">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`${item.link}`}
                                    className="text-lg font-poppins tracking-wide"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className='mx-3'>
                            <BackgroundDropdown />
                        </div>

                        <MobileNav />

                    </div>
                </nav>
            </header>
        </div >
    )
}

export default Navbar
