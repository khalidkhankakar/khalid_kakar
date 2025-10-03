import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useStyleContext } from "@/lib/StyleContext";
import { DYNAMIC_BACKGROUNDS } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


const BackgroundDropdown = () => {
    const { divStyle, divClassName, setStyle } = useStyleContext()
    const { setTheme } = useTheme()


    const handleChangeBackground = (divCS: string, divS: React.CSSProperties, bgTheme: string) => {
        setStyle({
            divClassName: divCS,
            divStyle: divS
        })
        setTheme(bgTheme)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="p-2  hover:bg-slate-200 cursor-pointer transition-all dark:hover:bg-gray-700 rounded-full">
                <Sun className="w-6 h-6 "/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
            
                {
                    DYNAMIC_BACKGROUNDS.map((bg) => (
                        <DropdownMenuItem key={bg.name} onClick={() => handleChangeBackground(bg.divClassName, bg.divStyle, bg.theme)} asChild>
                            <div className={` w-full border my-1 h-20 relative`}>
                                <div
                                    className="absolute inset-0 z-0"
                                    style={bg.divStyle}
                                />
                                <p className="z-30 text-xs font-poppins">{bg.name}</p>
                            </div>
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default BackgroundDropdown;
